import { ComponentStory, ComponentMeta } from "@storybook/react";

import TimesheetDetails, {
  ITimesheetDetailsProps
} from "../../../src/components/Timesheet/TimesheetDetails";

export default {
  title: "Components/Organisms/Timesheet/TimesheetDetails",
  component: TimesheetDetails,
  parameters: {
    componentSubtitle: "A time sheet component that allows detailed entry"
  }
} as ComponentMeta<typeof TimesheetDetails>;

const Template: ComponentStory<typeof TimesheetDetails> = (
  args: ITimesheetDetailsProps
) => <TimesheetDetails {...args} />;

export const Default = Template.bind({});
Default.parameters = { jest: ["TimesheetDetails.spec.tsx"] };
Default.args = {};
