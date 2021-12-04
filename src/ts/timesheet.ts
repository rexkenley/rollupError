export interface ITimesheetDetail {
  /**
   * Record id
   */
  id: string;
  /**
   * Line Number
   */
  lineNumber: number;
  /**
   * A lookup value for project
   */
  project: Xrm.LookupValue | null;
  /**
   * A lookup value for task
   */
  task: Xrm.LookupValue | null;
  /**
   * A description string
   */
  description: string;
  /**
   * A number of hours worked on Monday
   */
  monday: number;
  /**
   * A number of hours worked on Tuesday
   */
  tuesday: number;
  /**
   * A number of hours worked on Wednesday
   */
  wednesday: number;
  /**
   * A number of hours worked on Thursday
   */
  thursday: number;
  /**
   * A number of hours worked on Friday
   */
  friday: number;
  /**
   * A number of hours worked on Saturday
   */
  saturday: number;
  /**
   * A number of hours worked on Sunday
   */
  sunday: number;
  /**
   * An optional date when record was created
   */
  createdOn?: Date;
  /**
   * An optional date when record was modified
   */
  modifiedOn?: Date;
}

export function sumHoursByDay(
  details: ITimesheetDetail[] = []
): ITimesheetDetail {
  const reduceHours = (previous: number, current: number) => previous + current;

  if (details.length)
    return {
      monday: details.map((detail) => detail.monday || 0).reduce(reduceHours),
      tuesday: details.map((detail) => detail.tuesday || 0).reduce(reduceHours),
      wednesday: details
        .map((detail) => detail.wednesday || 0)
        .reduce(reduceHours),
      thursday: details
        .map((detail) => detail.thursday || 0)
        .reduce(reduceHours),
      friday: details.map((detail) => detail.friday || 0).reduce(reduceHours),
      saturday: details
        .map((detail) => detail.saturday || 0)
        .reduce(reduceHours),
      sunday: details.map((detail) => detail.sunday || 0).reduce(reduceHours)
    } as ITimesheetDetail;

  return {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0
  } as ITimesheetDetail;
}

export function over24HoursDays(detail: ITimesheetDetail): string[] {
  return (
    Object.keys(detail)
      // @ts-ignore
      .filter((day) => detail[day] > 24)
      .map((day) => day)
  );
}
