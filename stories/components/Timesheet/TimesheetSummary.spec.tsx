import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./TimesheetSummary.stories";

import { ITimesheetSummaryProps } from "../../../src/components/Timesheet/TimesheetSummary";
const {
  Default,
  Invisible,
  MondayValue,
  TuesdayValue,
  WednesdayValue,
  ThursdayValue,
  FridayValue,
  SaturdayValue,
  SundayValue,
  FullWeekValues,
  Over24Value,
  SundayStartDate,
  MondayStartDate,
  TuesdayStartDate,
  WednesdayStartDate,
  ThursdayStartDate,
  FridayStartDate,
  SaturdayStartDate
} = composeStories(stories);

test("Default", () => {
  const { container } = render(
    <Default {...(Default.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(8);

  expect(container.firstChild).toMatchSnapshot();
});

test("Invisible", () => {
  const { container } = render(
    <Invisible {...(Invisible.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeNull();
});

test("Monday Value", () => {
  const { container } = render(
    <MondayValue {...(MondayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Tuesday Value", () => {
  const { container } = render(
    <TuesdayValue {...(TuesdayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Wednesday Value", () => {
  const { container } = render(
    <WednesdayValue {...(WednesdayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Thursday Value", () => {
  const { container } = render(
    <ThursdayValue {...(ThursdayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Friday Value", () => {
  const { container } = render(
    <FridayValue {...(FridayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Saturday Value", () => {
  const { container } = render(
    <SaturdayValue {...(SaturdayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Sunday Value", () => {
  const { container } = render(
    <SundayValue {...(SundayValue.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getAllByText("0")).toHaveLength(6);
  expect(screen.getAllByText("8")).toHaveLength(2);

  expect(container.firstChild).toMatchSnapshot();
});

test("Full Week Values", () => {
  const { container } = render(
    <FullWeekValues {...(FullWeekValues.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(
    screen.getByText("Mon Oct 11 2021 - Sun Oct 17 2021")
  ).toBeInTheDocument();
  expect(screen.getByText("Mon")).toBeInTheDocument();
  expect(screen.getByText("Tue")).toBeInTheDocument();
  expect(screen.getByText("Wed")).toBeInTheDocument();
  expect(screen.getByText("Thu")).toBeInTheDocument();
  expect(screen.getByText("Fri")).toBeInTheDocument();
  expect(screen.getByText("Sat")).toBeInTheDocument();
  expect(screen.getByText("Sun")).toBeInTheDocument();
  expect(screen.getByText("Total")).toBeInTheDocument();
  expect(screen.getByText("1")).toBeInTheDocument();
  expect(screen.getByText("2")).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument();
  expect(screen.getByText("4")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();
  expect(screen.getByText("6")).toBeInTheDocument();
  expect(screen.getByText("0")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Over 24 Value", () => {
  const { container } = render(
    <Over24Value {...(Over24Value.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getAllByText("25")).toHaveLength(4);
  expect(screen.getAllByText("24")).toHaveLength(3);
  expect(screen.getByText("172")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Sunday Start Date", () => {
  const { container } = render(
    <SundayStartDate {...(SundayStartDate.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Sun Oct 10 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Monday Start Date", () => {
  const { container } = render(
    <MondayStartDate {...(MondayStartDate.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Mon Oct 11 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Tuesday Start Date", () => {
  const { container } = render(
    <TuesdayStartDate {...(TuesdayStartDate.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Tue Oct 12 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Wednesday Start Date", () => {
  const { container } = render(
    <WednesdayStartDate
      {...(WednesdayStartDate.args as ITimesheetSummaryProps)}
    />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Wed Oct 13 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Thursday Start Date", () => {
  const { container } = render(
    <ThursdayStartDate
      {...(ThursdayStartDate.args as ITimesheetSummaryProps)}
    />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Thu Oct 14 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Friday Start Date", () => {
  const { container } = render(
    <FridayStartDate {...(FridayStartDate.args as ITimesheetSummaryProps)} />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Fri Oct 15 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});

test("Saturday Start Date", () => {
  const { container } = render(
    <SaturdayStartDate
      {...(SaturdayStartDate.args as ITimesheetSummaryProps)}
    />
  );

  expect(container.firstChild).toBeDefined();

  expect(screen.getByText("Sat Oct 16 2021 -")).toBeInTheDocument();

  expect(container.firstChild).toMatchSnapshot();
});
