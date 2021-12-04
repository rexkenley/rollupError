import { useState, useEffect } from "react";
import { Stack, IStackProps } from "@fluentui/react/lib/Stack";
import { DefaultPalette } from "@fluentui/style-utilities";
import { ITextProps, Text } from "@fluentui/react/lib/Text";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import addDays from "date-fns/addDays";
import capitalize from "lodash/capitalize";

export interface ITimesheetSummaryProps {
  visible?: boolean;
  startDate: Date;
  endDate: Date;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

export default function TimesheetSummary({
  visible = true,
  startDate,
  endDate,
  monday = 0,
  tuesday = 0,
  wednesday = 0,
  thursday = 0,
  friday = 0,
  saturday = 0,
  sunday = 0
}: ITimesheetSummaryProps): JSX.Element {
  const [totalHours, setTotalHours] = useState(0),
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
    activeWeekProps: IStackProps = {
      horizontal: true,
      horizontalAlign: "space-evenly",
      verticalAlign: "center",
      wrap: true,
      styles: { root: { marginTop: "10px", width: "100%" } }
    },
    columnProps: IStackProps = {
      horizontal: false,
      horizontalAlign: "center",
      verticalAlign: "center",
      styles: {
        root: {
          border: "1px solid #0066AE",
          height: "60px",
          width: "60px",
          backgroundColor: DefaultPalette.green
        }
      }
    },
    columnRedProps: IStackProps = {
      horizontal: false,
      horizontalAlign: "center",
      verticalAlign: "center",
      styles: {
        root: {
          border: "1px solid #0066AE",
          height: "60px",
          width: "60px",
          backgroundColor: DefaultPalette.red
        }
      }
    },
    textProps: ITextProps = {
      styles: { root: { color: "white" } }
    },
    calculateTotalHours = () => {
      return (
        monday + tuesday + wednesday + thursday + friday + saturday + sunday
      );
    };

  useEffect(() => {
    setTotalHours(calculateTotalHours());
  }, [monday, tuesday, wednesday, thursday, friday, saturday, sunday]);

  if (!visible) return <></>;

  return (
    <>
      <Stack key="dateStartEnd">
        <Text variant="xxLarge">{`${startDate?.toDateString() || ""} - ${
          endDate?.toDateString() || ""
        }`}</Text>
      </Stack>
      <Stack key="days" {...activeWeekProps}>
        {week.map((day) => {
          let dayValue = 0;

          switch (day) {
            case "monday":
              dayValue = monday;
              break;
            case "tuesday":
              dayValue = tuesday;
              break;
            case "wednesday":
              dayValue = wednesday;
              break;
            case "thursday":
              dayValue = thursday;
              break;
            case "friday":
              dayValue = friday;
              break;
            case "saturday":
              dayValue = saturday;
              break;
            case "sunday":
              dayValue = sunday;
              break;
            default:
          }

          return (
            <Stack
              key={day}
              {...(dayValue > 24 ? columnRedProps : columnProps)}
            >
              <Text {...textProps}>{capitalize(day.substring(0, 3))}</Text>
              <Text {...textProps}>{dayValue}</Text>
            </Stack>
          );
        })}
        <Stack key="total" {...columnProps}>
          <Text {...textProps}>Total</Text>
          <Text {...textProps}>{totalHours}</Text>
        </Stack>
      </Stack>
    </>
  );
}
