export interface ITimesheetDetailsProps {
  /**
   * An optional boolean that disables the control.
   */
  disabled?: boolean;
  /**
   * An optional boolean that displays the control.
   */
  visible?: boolean;
}

export default function TimeSheetDetails({
  disabled = false,
  visible = false
}: ITimesheetDetailsProps): JSX.Element {
  return <>{disabled.toString()}</>;
}
