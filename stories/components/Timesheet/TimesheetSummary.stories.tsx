import { ComponentStory, ComponentMeta } from "@storybook/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";

import TimesheetSummary from "../../../src/components/Timesheet/TimesheetSummary";

initializeIcons();

export default {
  title: "Components/Organisms/Timesheet/TimesheetSummary",
  component: TimesheetSummary,
  parameters: {
    componentSubtitle:
      "A control that displays current timecard hours entered for a week."
  },
  argTypes: {
    activeWeek: { type: { required: true }, control: false }
  }
} as ComponentMeta<typeof TimesheetSummary>;

const Template: ComponentStory<typeof TimesheetSummary> = (args) => (
  <TimesheetSummary {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Invisible = Template.bind({});
Invisible.args = { visible: false };

export const MondayValue = Template.bind({});
MondayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  monday: 8
};

export const TuesdayValue = Template.bind({});
TuesdayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  tuesday: 8
};

export const WednesdayValue = Template.bind({});
WednesdayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  wednesday: 8
};

export const ThursdayValue = Template.bind({});
ThursdayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  thursday: 8
};

export const FridayValue = Template.bind({});
FridayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  friday: 8
};

export const SaturdayValue = Template.bind({});
SaturdayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  saturday: 8
};

export const SundayValue = Template.bind({});
SundayValue.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  sunday: 8
};

export const FullWeekValues = Template.bind({});
FullWeekValues.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 0
};

export const Over24Value = Template.bind({});
Over24Value.args = {
  startDate: new Date("10/11/2021"),
  endDate: new Date("10/17/2021"),
  monday: 25,
  tuesday: 24,
  wednesday: 25,
  thursday: 24,
  friday: 25,
  saturday: 24,
  sunday: 25
};

export const SundayStartDate = Template.bind({});
SundayStartDate.args = { startDate: new Date(2021, 9, 10) };

export const MondayStartDate = Template.bind({});
MondayStartDate.args = { startDate: new Date(2021, 9, 11) };

export const TuesdayStartDate = Template.bind({});
TuesdayStartDate.args = { startDate: new Date(2021, 9, 12) };

export const WednesdayStartDate = Template.bind({});
WednesdayStartDate.args = { startDate: new Date(2021, 9, 13) };

export const ThursdayStartDate = Template.bind({});
ThursdayStartDate.args = { startDate: new Date(2021, 9, 14) };

export const FridayStartDate = Template.bind({});
FridayStartDate.args = { startDate: new Date(2021, 9, 15) };

export const SaturdayStartDate = Template.bind({});
SaturdayStartDate.args = { startDate: new Date(2021, 9, 16) };
