import { ComponentStory, ComponentMeta } from "@storybook/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { userEvent, screen, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import USID, { IUSIDProps, IDType } from "../../../src/components/USID/USID";

initializeIcons();

export default {
  title: "Components/Organisms/USID",
  component: USID,
  parameters: {
    componentSubtitle:
      "A control that allows a user to select a form of id which then sets the appropriate mask."
  },
  argTypes: {
    onIdTypeChange: { action: "Id Type Change" },
    onValueChange: { action: "Value Change" }
  }
} as ComponentMeta<typeof USID>;

const Template: ComponentStory<typeof USID> = (args: IUSIDProps) => (
  <USID {...args} />
);

export const Default = Template.bind({});
Default.parameters = { jest: ["USID.spec.tsx"] };
Default.args = { value: "" };

export const Disabled = Template.bind({});
Disabled.parameters = { jest: ["USID.spec.tsx"] };
Disabled.args = { ...Default.args, disabled: true };

export const Invisible = Template.bind({});
Invisible.parameters = { jest: ["USID.spec.tsx"] };
Invisible.args = { ...Default.args, visible: false };

export const ReadOnly = Template.bind({});
ReadOnly.parameters = { jest: ["USID.spec.tsx"] };
ReadOnly.args = {
  ...Default.args,
  readOnly: true,
  idType: IDType.Passport,
  value: "A999999"
};

export const OnIdTypeChange = Template.bind({});
OnIdTypeChange.parameters = { jest: ["USID.spec.tsx"] };
OnIdTypeChange.args = { ...Default.args };
OnIdTypeChange.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("combobox"));
  await userEvent.click(screen.getByTitle("Passport"), undefined, {
    skipPointerEventsCheck: true
  });

  await waitFor(() => expect(args.onIdTypeChange).toHaveBeenCalled());
};

export const OnValueChange = Template.bind({});
OnValueChange.parameters = { jest: ["USID.spec.tsx"] };
OnValueChange.args = { ...Default.args };
OnValueChange.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByRole("combobox"));
  await userEvent.click(screen.getByTitle("Passport"), undefined, {
    skipPointerEventsCheck: true
  });
  await userEvent.type(screen.getByRole("textbox"), "{selectall}A999999");
  await userEvent.tab();

  await waitFor(() => expect(args.onValueChange).toHaveBeenCalled());
};

// In 'value', the letter 'A' means a letter only; '9' is a
// number only; and 'X' is either a letter or a number

export const SelectedIdPassport = Template.bind({});
SelectedIdPassport.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdPassport.args = {
  ...Default.args,
  idType: IDType.Passport,
  value: "A999999"
};

export const SelectedIdAL = Template.bind({});
SelectedIdAL.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdAL.args = { ...Default.args, idType: IDType.AL, value: "9999999" };

export const SelectedIdAK = Template.bind({});
SelectedIdAK.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdAK.args = { ...Default.args, idType: IDType.AK, value: "9999999" };

export const SelectedIdAZ = Template.bind({});
SelectedIdAZ.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdAZ.args = { ...Default.args, idType: IDType.AZ, value: "X99999999" };

export const SelectedIdAR = Template.bind({});
SelectedIdAR.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdAR.args = { ...Default.args, idType: IDType.AR, value: "999999999" };

export const SelectedIdCA = Template.bind({});
SelectedIdCA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdCA.args = { ...Default.args, idType: IDType.CA, value: "A9999999" };

export const SelectedIdCO = Template.bind({});
SelectedIdCO.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdCO.args = { ...Default.args, idType: IDType.CO, value: "999999999" };

export const SelectedIdCT = Template.bind({});
SelectedIdCT.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdCT.args = { ...Default.args, idType: IDType.CT, value: "999999999" };

export const SelectedIdDE = Template.bind({});
SelectedIdDE.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdDE.args = { ...Default.args, idType: IDType.DE, value: "9999999" };

export const SelectedIdFL = Template.bind({});
SelectedIdFL.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdFL.args = {
  ...Default.args,
  idType: IDType.FL,
  value: "A999999999999"
};

export const SelectedIdGA = Template.bind({});
SelectedIdGA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdGA.args = { ...Default.args, idType: IDType.GA, value: "999999999" };

export const SelectedIdHI = Template.bind({});
SelectedIdHI.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdHI.args = { ...Default.args, idType: IDType.HI, value: "A99999999" };

export const SelectedIdID = Template.bind({});
SelectedIdID.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdID.args = { ...Default.args, idType: IDType.ID, value: "AA999999A" };

export const SelectedIdIL = Template.bind({});
SelectedIdIL.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdIL.args = {
  ...Default.args,
  idType: IDType.IL,
  value: "A99999999999"
};

export const SelectedIdIN = Template.bind({});
SelectedIdIN.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdIN.args = { ...Default.args, idType: IDType.IN, value: "9999999999" };

export const SelectedIdIA = Template.bind({});
SelectedIdIA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdIA.args = { ...Default.args, idType: IDType.IA, value: "999XX9999" };

export const SelectedIdKS = Template.bind({});
SelectedIdKS.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdKS.args = { ...Default.args, idType: IDType.KS, value: "A99999999" };

export const SelectedIdKY = Template.bind({});
SelectedIdKY.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdKY.args = { ...Default.args, idType: IDType.KY, value: "A99999999" };

export const SelectedIdLA = Template.bind({});
SelectedIdLA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdLA.args = { ...Default.args, idType: IDType.LA, value: "999999999" };

export const SelectedIdME = Template.bind({});
SelectedIdME.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdME.args = { ...Default.args, idType: IDType.ME, value: "9999999" };

export const SelectedIdMD = Template.bind({});
SelectedIdMD.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMD.args = {
  ...Default.args,
  idType: IDType.MD,
  value: "A999999999999"
};

export const SelectedIdMA = Template.bind({});
SelectedIdMA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMA.args = { ...Default.args, idType: IDType.MA, value: "S999999999" };

export const SelectedIdMI = Template.bind({});
SelectedIdMI.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMI.args = {
  ...Default.args,
  idType: IDType.MI,
  value: "A999999999999"
};

export const SelectedIdMN = Template.bind({});
SelectedIdMN.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMN.args = {
  ...Default.args,
  idType: IDType.MN,
  value: "A999999999999"
};

export const SelectedIdMS = Template.bind({});
SelectedIdMS.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMS.args = { ...Default.args, idType: IDType.MS, value: "999999999" };

export const SelectedIdMO = Template.bind({});
SelectedIdMO.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMO.args = { ...Default.args, idType: IDType.MO, value: "A999999999" };

export const SelectedIdMT = Template.bind({});
SelectedIdMT.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdMT.args = {
  ...Default.args,
  idType: IDType.MT,
  value: "9999999999999"
};

export const SelectedIdNE = Template.bind({});
SelectedIdNE.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNE.args = { ...Default.args, idType: IDType.NE, value: "A99999999" };

export const SelectedIdNV = Template.bind({});
SelectedIdNV.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNV.args = { ...Default.args, idType: IDType.NV, value: "9999999999" };

export const SelectedIdNH = Template.bind({});
SelectedIdNH.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNH.args = { ...Default.args, idType: IDType.NH, value: "9999999999" };

export const SelectedIdNJ = Template.bind({});
SelectedIdNJ.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNJ.args = {
  ...Default.args,
  idType: IDType.NJ,
  value: "A99999999999999"
};

export const SelectedIdNM = Template.bind({});
SelectedIdNM.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNM.args = { ...Default.args, idType: IDType.NM, value: "999999999" };

export const SelectedIdNY = Template.bind({});
SelectedIdNY.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNY.args = { ...Default.args, idType: IDType.NY, value: "999999999" };

export const SelectedIdNC = Template.bind({});
SelectedIdNC.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdNC.args = {
  ...Default.args,
  idType: IDType.NC,
  value: "999999999999"
};

export const SelectedIdND = Template.bind({});
SelectedIdND.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdND.args = { ...Default.args, idType: IDType.ND, value: "AAA999999" };

export const SelectedIdOH = Template.bind({});
SelectedIdOH.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdOH.args = { ...Default.args, idType: IDType.OH, value: "AA999999" };

export const SelectedIdOK = Template.bind({});
SelectedIdOK.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdOK.args = { ...Default.args, idType: IDType.OK, value: "A999999999" };

export const SelectedIdOR = Template.bind({});
SelectedIdOR.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdOR.args = { ...Default.args, idType: IDType.OR, value: "9999999" };

export const SelectedIdPA = Template.bind({});
SelectedIdPA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdPA.args = { ...Default.args, idType: IDType.PA, value: "99999999" };

export const SelectedIdRI = Template.bind({});
SelectedIdRI.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdRI.args = { ...Default.args, idType: IDType.RI, value: "9999999" };

export const SelectedIdSC = Template.bind({});
SelectedIdSC.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdSC.args = { ...Default.args, idType: IDType.SC, value: "999999999" };

export const SelectedIdSD = Template.bind({});
SelectedIdSD.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdSD.args = { ...Default.args, idType: IDType.SD, value: "99999999" };

export const SelectedIdTN = Template.bind({});
SelectedIdTN.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdTN.args = { ...Default.args, idType: IDType.TN, value: "999999999" };

export const SelectedIdTX = Template.bind({});
SelectedIdTX.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdTX.args = { ...Default.args, idType: IDType.TX, value: "99999999" };

export const SelectedIdUT = Template.bind({});
SelectedIdUT.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdUT.args = { ...Default.args, idType: IDType.UT, value: "999999999" };

export const SelectedIdVT = Template.bind({});
SelectedIdVT.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdVT.args = { ...Default.args, idType: IDType.VT, value: "9999999X" };

export const SelectedIdVA = Template.bind({});
SelectedIdVA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdVA.args = { ...Default.args, idType: IDType.VA, value: "A99999999" };

export const SelectedIdWA = Template.bind({});
SelectedIdWA.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdWA.args = {
  ...Default.args,
  idType: IDType.WA,
  value: "AAAXXAA999A9"
};

export const SelectedIdDC = Template.bind({});
SelectedIdDC.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdDC.args = { ...Default.args, idType: IDType.DC, value: "9999999" };

export const SelectedIdWV = Template.bind({});
SelectedIdWV.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdWV.args = { ...Default.args, idType: IDType.WV, value: "X999999" };

export const SelectedIdWI = Template.bind({});
SelectedIdWI.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdWI.args = {
  ...Default.args,
  idType: IDType.WI,
  value: "A9999999999999"
};

export const SelectedIdWY = Template.bind({});
SelectedIdWY.parameters = { jest: ["USID.spec.tsx"] };
SelectedIdWY.args = { ...Default.args, idType: IDType.WY, value: "999999999" };
