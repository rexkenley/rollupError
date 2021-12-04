import { useState, useEffect } from "react";
import { getTheme } from "@fluentui/react/lib/Styling";
import { CommandBar, ICommandBarProps } from "@fluentui/react/lib/CommandBar";
import {
  DetailsList,
  DetailsRow,
  Selection,
  IDetailsListProps,
  IColumn,
  IDetailsRowStyles,
  CheckboxVisibility,
  ConstrainMode,
  DetailsListLayoutMode,
  SelectionMode,
  ColumnActionsMode,
  IObjectWithKey
} from "@fluentui/react/lib/DetailsList";
import { TagPicker, ITagPickerProps, ITag } from "@fluentui/react/lib/Pickers";
import { TooltipHost } from "@fluentui/react/lib/Tooltip";
import { TextField, ITextFieldProps } from "@fluentui/react/lib/TextField";
import { SpinButton, ISpinButtonProps } from "@fluentui/react/lib/SpinButton";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { Label } from "@fluentui/react/lib/Label";
import {
  Dialog,
  DialogFooter,
  DialogType,
  IDialogProps
} from "@fluentui/react/lib/Dialog";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import addDays from "date-fns/addDays";
import capitalize from "lodash/capitalize";

import {
  ITimesheetDetail,
  sumHoursByDay,
  over24HoursDays
} from "../../ts/timesheet";

export interface ITimesheetDetailsProps {
  /**
   * An optional boolean that disables the control.
   */
  disabled?: boolean;
  /**
   * An optional boolean that displays the control.
   */
  visible?: boolean;
  /**
   * An array of ITimesheetDetail
   */
  items: ITimesheetDetail[];
  /**
   * A date to determine which day to start
   */
  startDate: Date;
  /**
   * A function that fires when the Remove button is clicked
   */
  onRemove: (items: ITimesheetDetail[]) => Promise<void> | void;
  /**
   * A function that fires when the Save button is clicked
   */
  onSave: (items: ITimesheetDetail[]) => Promise<void> | void;
  /**
   * A function that fires when searching for projects
   */
  onProjectResolveSuggestions: (
    filter: string,
    selectedItems?: []
  ) => PromiseLike<ITag[]> | ITag[];
  /**
   * A function that fires when searching for tasks
   */
  onTaskResolveSuggestions: (
    filter: string,
    projectId: string,
    selectedItems?: []
  ) => PromiseLike<ITag[]> | ITag[];
}

export default function TimeSheetDetails({
  disabled = false,
  visible = true,
  items = [],
  startDate,
  onRemove,
  onSave,
  onProjectResolveSuggestions,
  onTaskResolveSuggestions
}: ITimesheetDetailsProps): JSX.Element {
  const [currentItems, setItems] = useState(items),
    [currentAdd, setAdd] = useState(
      items.length ? Math.max(...items.map((i) => i.lineNumber)) + 1 : 0
    ),
    [currentSelection, setSelection] = useState([] as ITimesheetDetail[]),
    selection = new Selection({
      onSelectionChanged: () => {
        setSelection(
          selection
            .getSelection()
            .map((s: IObjectWithKey) => s as ITimesheetDetail)
        );
      }
    }),
    cbProps: ICommandBarProps = {
      items: [
        {
          key: "add",
          iconOnly: true,
          iconProps: { iconName: "Add" },
          title: "Add",
          disabled,
          onClick: () => {
            setItems([
              ...currentItems,
              {
                id: currentAdd.toString(),
                lineNumber: currentAdd,
                monday: 0,
                tuesday: 0,
                wednesday: 0,
                thursday: 0,
                friday: 0,
                saturday: 0,
                sunday: 0
              } as ITimesheetDetail
            ]);
            setAdd(currentAdd + 1);
          }
        },
        {
          key: "remove",
          iconOnly: true,
          iconProps: { iconName: "Remove" },
          title: "Remove",
          disabled,
          onClick: () => {
            if (!currentSelection.length) return;

            setItems(
              currentItems.filter((i) =>
                currentSelection.every((s) => s.id !== i.id)
              )
            );

            onRemove && onRemove(currentSelection);
          }
        },
        {
          key: "save",
          iconOnly: true,
          iconProps: { iconName: "Save" },
          title: "Save",
          disabled,
          onClick: () => {
            onSave && onSave(currentItems);
          }
        }
      ]
    },
    week = startDate
      ? eachDayOfInterval({
          start: startDate,
          end: addDays(startDate, 6)
        }).map((day) =>
          day.toLocaleDateString(undefined, { weekday: "long" }).toLowerCase()
        )
      : [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday"
        ],
    setDayColumn = (day: string) => {
      return {
        key: day.substring(0, 3),
        maxWidth: 78,
        minWidth: 78,
        name: day.substring(0, 3).toUpperCase(),
        columnActionsMode: ColumnActionsMode.clickable,
        onRender: (item?: any) => {
          const props: ISpinButtonProps = {
            disabled,
            min: 0,
            max: 24,
            step: 0.25,
            defaultValue: "0",
            styles: {
              spinButtonWrapper: { maxWidth: 78, minWidth: 78 },
              input: { maxWidth: 55, minWidth: 55 }
            },
            value: item ? item[day] : 0,
            onChange: (
              event: React.SyntheticEvent<HTMLElement>,
              newValue?: string
            ) => {
              setItems(
                currentItems.map((i) => {
                  if (i.id === item.id)
                    return { ...i, [day]: Number(newValue) };
                  return i;
                })
              );
            }
          };
          return <SpinButton {...props} />;
        }
      };
    },
    columns: IColumn[] = [
      {
        key: "project",
        maxWidth: 180,
        minWidth: 180,
        name: "Project",
        columnActionsMode: ColumnActionsMode.clickable,
        onRender: (item?: any) => {
          const tpProps: ITagPickerProps = {
            disabled,
            itemLimit: 1,
            styles: {
              root: { width: 150 },
              ...(item.id.length === 36 && !item.project
                ? { text: { border: "2px solid red" } }
                : {})
            },
            // @ts-ignore
            onResolveSuggestions: onProjectResolveSuggestions,
            getTextFromItem: (item: ITag) => item.name,
            pickerSuggestionsProps: {
              suggestionsHeaderText: "Suggested Projects",
              noResultsFoundText: "No Projects Found"
            },
            selectedItems: item?.project
              ? [{ key: item.project.id, name: item.project.name }]
              : [],
            onChange: (items?: ITag[]) => {
              setItems(
                currentItems.map((i) => {
                  if (i.id === item.id)
                    return {
                      ...i,
                      project: items?.length ? { ...items[0] } : null
                    } as ITimesheetDetail;

                  return i as ITimesheetDetail;
                })
              );
            }
          };

          return <TagPicker {...tpProps} />;
        }
      },
      {
        key: "task",
        maxWidth: 180,
        minWidth: 180,
        name: "Task",
        columnActionsMode: ColumnActionsMode.clickable,
        onRender: (item?: any) => {
          const tpProps: ITagPickerProps = {
            itemLimit: 1,
            styles: {
              root: { width: 150 },
              ...(item.id.length === 36 && !item.task
                ? { text: { border: "2px solid red" } }
                : {})
            },
            disabled: disabled || !item.project?.id,
            // @ts-ignore
            onResolveSuggestions: (filter: string, selectedItems?: []) => {
              return (
                onTaskResolveSuggestions &&
                onTaskResolveSuggestions(filter, item.project.id, selectedItems)
              );
            },
            getTextFromItem: (item: ITag) => item.name,
            pickerSuggestionsProps: {
              suggestionsHeaderText: "Suggested Tasks",
              noResultsFoundText: "No Tasks Found"
            },
            selectedItems: item?.task
              ? [{ key: item.task.id, name: item.task.name }]
              : [],
            onChange: (items?: ITag[]) => {
              setItems(
                currentItems.map((i) => {
                  if (i.id === item.id)
                    return {
                      ...i,
                      task: items?.length ? { ...items[0] } : null
                    } as ITimesheetDetail;

                  return i as ITimesheetDetail;
                })
              );
            }
          };

          return <TagPicker {...tpProps} />;
        }
      },
      {
        key: "description",
        maxWidth: 150,
        minWidth: 150,
        name: "Description",
        columnActionsMode: ColumnActionsMode.clickable,
        onRender: (item?: any) => {
          const props: ITextFieldProps = {
            disabled,
            validateOnFocusOut: true,
            validateOnLoad: false,
            styles: {
              fieldGroup: {
                width: 150,
                ...(item.id.length === 36 && !item.description
                  ? { border: "2px solid red" }
                  : {})
              }
            },
            value: item?.description ?? "",
            onChange: (
              event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string
            ) => {
              setItems(
                currentItems.map((i) => {
                  if (i.id === item.id)
                    return { ...i, description: newValue } as ITimesheetDetail;

                  return i as ITimesheetDetail;
                })
              );
            }
          };

          return (
            <TooltipHost content={item?.description ?? ""}>
              <TextField {...props} />
            </TooltipHost>
          );
        }
      },
      ...week.map((day) => setDayColumn(day)),
      {
        key: "total",
        maxWidth: 50,
        minWidth: 50,
        name: "Total",
        columnActionsMode: ColumnActionsMode.clickable,
        onRender: (item?: any) => (
          <Label>
            {Number(item?.monday ?? 0) +
              Number(item?.tuesday ?? 0) +
              Number(item?.wednesday ?? 0) +
              Number(item?.thursday ?? 0) +
              Number(item?.friday ?? 0) +
              Number(item?.saturday ?? 0) +
              Number(item?.sunday ?? 0)}
          </Label>
        )
      }
    ],
    theme = getTheme(),
    dlProps: IDetailsListProps = {
      selection,
      columns,
      items: currentItems,
      compact: true,
      constrainMode: ConstrainMode.unconstrained,
      layoutMode: DetailsListLayoutMode.justified,
      selectionMode: SelectionMode.multiple,
      cellStyleProps: {
        cellLeftPadding: 4,
        cellRightPadding: 4,
        cellExtraRightPadding: 0
      },
      checkboxVisibility: disabled
        ? CheckboxVisibility.hidden
        : CheckboxVisibility.onHover,
      onRenderRow: (props) => {
        const customStyles: Partial<IDetailsRowStyles> = {};

        if (!props) return null;

        if (props.itemIndex % 2 === 0) {
          customStyles.root = {
            backgroundColor: theme.palette.themeLighterAlt
          };
        }

        return <DetailsRow {...props} styles={customStyles} />;
      }
    },
    [currentHidden, setHidden] = useState(
      currentItems.every((i) => i.project) &&
        currentItems.every((i) => i.task) &&
        currentItems.every((i) => i.description) &&
        !over24HoursDays(sumHoursByDay(currentItems)).length
    ),
    dlgProps: IDialogProps = {
      hidden: currentHidden,
      modalProps: { isModeless: false },
      dialogContentProps: {
        type: DialogType.normal,
        title: "Timesheet Detail Entry Issues",
        subText: "Please resolve these issues"
      }
    };

  useEffect(() => {
    setItems(items);
    setHidden(
      items.every((i) => i.project) &&
        items.every((i) => i.task) &&
        items.every((i) => i.description) &&
        !over24HoursDays(sumHoursByDay(items)).length
    );
  }, [items]);

  if (!visible) return <></>;

  return (
    <>
      <CommandBar {...cbProps} />
      <DetailsList {...dlProps} />
      <Dialog {...dlgProps}>
        <ul>
          {currentItems.some((i) => !i.project) && (
            <li key="project">Empty Project Entry</li>
          )}
          {currentItems.some((i) => i.project && !i.task) && (
            <li key="task">Empty Task Entry</li>
          )}
          {currentItems.some((i) => !i.description) && (
            <li key="description">Empty Description Entry</li>
          )}
          {over24HoursDays(sumHoursByDay(currentItems)).map((day) => (
            <li key={day}>{capitalize(day)} is over 24 hours</li>
          ))}
        </ul>
        <DialogFooter>
          <DefaultButton
            onClick={() => {
              setHidden(true);
            }}
            text="Close"
          />
        </DialogFooter>
      </Dialog>
    </>
  );
}
