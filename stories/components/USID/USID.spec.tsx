import { composeStories } from "@storybook/testing-react";
import { render, screen } from "@testing-library/react";

import * as stories from "./USID.stories";

const {
  Default,
  Disabled,
  Invisible,
  ReadOnly,
  OnIdTypeChange,
  OnValueChange,
  SelectedIdPassport,
  SelectedIdAL,
  SelectedIdAK,
  SelectedIdAZ,
  SelectedIdAR,
  SelectedIdCA,
  SelectedIdCO,
  SelectedIdCT,
  SelectedIdDE,
  SelectedIdFL,
  SelectedIdGA,
  SelectedIdHI,
  SelectedIdID,
  SelectedIdIL,
  SelectedIdIN,
  SelectedIdIA,
  SelectedIdKS,
  SelectedIdKY,
  SelectedIdLA,
  SelectedIdME,
  SelectedIdMD,
  SelectedIdMA,
  SelectedIdMI,
  SelectedIdMN,
  SelectedIdMS,
  SelectedIdMO,
  SelectedIdMT,
  SelectedIdNE,
  SelectedIdNV,
  SelectedIdNH,
  SelectedIdNJ,
  SelectedIdNM,
  SelectedIdNY,
  SelectedIdNC,
  SelectedIdND,
  SelectedIdOH,
  SelectedIdOK,
  SelectedIdOR,
  SelectedIdPA,
  SelectedIdRI,
  SelectedIdSC,
  SelectedIdSD,
  SelectedIdTN,
  SelectedIdTX,
  SelectedIdUT,
  SelectedIdVT,
  SelectedIdVA,
  SelectedIdWA,
  SelectedIdDC,
  SelectedIdWV,
  SelectedIdWI,
  SelectedIdWY
} = composeStories(stories);

test("Default", () => {
  const { container } = render(<Default />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveAttribute(
    "placeholder",
    "Select a Form of Identification"
  );

  expect(screen.getByRole("textbox")).toBeEnabled();
  expect(container.firstChild).toMatchSnapshot();
});

test("Disabled", () => {
  const { container } = render(<Disabled />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toHaveAttribute("aria-disabled", "true");
  expect(comboBox).toHaveAttribute(
    "placeholder",
    "Select a Form of Identification"
  );

  expect(screen.getByRole("textbox")).toBeDisabled();

  expect(container.firstChild).toMatchSnapshot();
});

test("Invisible", () => {
  const { container } = render(<Invisible />);

  expect(container.firstChild).toBeNull();
});

test("Read Only", () => {
  const { container } = render(<ReadOnly />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toHaveAttribute("aria-disabled", "true");
  expect(comboBox).toHaveValue("Passport");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toHaveAttribute("readonly");
  expect(textBox).toHaveValue("A999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("On Id Type Change", async () => {
  const test = jest.fn(),
    { container } = render(<OnIdTypeChange onIdTypeChange={test} />);

  expect(container.firstChild).toBeDefined();

  await OnIdTypeChange.play({ canvasElement: container });

  expect(test).toHaveBeenCalled();
});

test("On Value Change", async () => {
  const test = jest.fn(),
    { container } = render(<OnValueChange onValueChange={test} />);

  expect(container.firstChild).toBeDefined();

  await OnValueChange.play({ canvasElement: container });

  expect(test).toHaveBeenCalled();
});

test("Selected Id Passport", () => {
  const { container } = render(<SelectedIdPassport />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("Passport");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id AL", () => {
  const { container } = render(<SelectedIdAL />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("AL");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id AK", () => {
  const { container } = render(<SelectedIdAK />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("AK");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id AZ", () => {
  const { container } = render(<SelectedIdAZ />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("AZ");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("X99999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id AR", () => {
  const { container } = render(<SelectedIdAR />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("AR");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id CA", () => {
  const { container } = render(<SelectedIdCA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("CA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id CO", () => {
  const { container } = render(<SelectedIdCO />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("CO");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("99-999-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id CT", () => {
  const { container } = render(<SelectedIdCT />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("CT");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id DE", () => {
  const { container } = render(<SelectedIdDE />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("DE");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id FL", () => {
  const { container } = render(<SelectedIdFL />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("FL");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999-999-99-999-9");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id GA", () => {
  const { container } = render(<SelectedIdGA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("GA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id HI", () => {
  const { container } = render(<SelectedIdHI />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("HI");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A99999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id ID", () => {
  const { container } = render(<SelectedIdID />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("ID");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("AA999999A");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id IL", () => {
  const { container } = render(<SelectedIdIL />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("IL");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999-9999-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id IN", () => {
  const { container } = render(<SelectedIdIN />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("IN");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999-99-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id IA", () => {
  const { container } = render(<SelectedIdIA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("IA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999XX9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id KS", () => {
  const { container } = render(<SelectedIdKS />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("KS");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A99-99-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id KY", () => {
  const { container } = render(<SelectedIdKY />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("KY");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A99-999-999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id LA", () => {
  const { container } = render(<SelectedIdLA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("LA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id ME", () => {
  const { container } = render(<SelectedIdME />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("ME");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MD", () => {
  const { container } = render(<SelectedIdMD />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MD");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A-999-999-999-999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MA", () => {
  const { container } = render(<SelectedIdMA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("S999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MI", () => {
  const { container } = render(<SelectedIdMI />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MI");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A 999 999 999 999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MN", () => {
  const { container } = render(<SelectedIdMN />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MN");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999-999-999-999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MS", () => {
  const { container } = render(<SelectedIdMS />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MS");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999-99-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MO", () => {
  const { container } = render(<SelectedIdMO />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MO");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id MT", () => {
  const { container } = render(<SelectedIdMT />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("MT");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NE", () => {
  const { container } = render(<SelectedIdNE />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NE");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A99999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NV", () => {
  const { container } = render(<SelectedIdNV />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NV");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NH", () => {
  const { container } = render(<SelectedIdNH />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NH");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NJ", () => {
  const { container } = render(<SelectedIdNJ />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NJ");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A9999-99999-99999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NM", () => {
  const { container } = render(<SelectedIdNM />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NM");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NY", () => {
  const { container } = render(<SelectedIdNY />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NY");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999 999 999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id NC", () => {
  const { container } = render(<SelectedIdNC />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("NC");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id ND", () => {
  const { container } = render(<SelectedIdND />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("ND");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("AAA-99-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id OH", () => {
  const { container } = render(<SelectedIdOH />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("OH");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("AA999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id OK", () => {
  const { container } = render(<SelectedIdOK />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("OK");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id OR", () => {
  const { container } = render(<SelectedIdOR />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("OR");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id PA", () => {
  const { container } = render(<SelectedIdPA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("PA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("99 999 999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id RI", () => {
  const { container } = render(<SelectedIdRI />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("RI");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id SC", () => {
  const { container } = render(<SelectedIdSC />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("SC");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id SD", () => {
  const { container } = render(<SelectedIdSD />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("SD");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("99999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id TN", () => {
  const { container } = render(<SelectedIdTN />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("TN");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id TX", () => {
  const { container } = render(<SelectedIdTX />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("TX");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("99999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id UT", () => {
  const { container } = render(<SelectedIdUT />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("UT");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id VT", () => {
  const { container } = render(<SelectedIdVT />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("VT");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999X");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id VA", () => {
  const { container } = render(<SelectedIdVA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("VA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A99-99-9999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id WA", () => {
  const { container } = render(<SelectedIdWA />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("WA");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("AAA**XX999A9");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id DC", () => {
  const { container } = render(<SelectedIdDC />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("DC");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("9999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id WV", () => {
  const { container } = render(<SelectedIdWV />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("WV");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("X999999");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id WI", () => {
  const { container } = render(<SelectedIdWI />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("WI");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("A999-9999-9999-99");

  expect(container.firstChild).toMatchSnapshot();
});

test("Selected Id WY", () => {
  const { container } = render(<SelectedIdWY />);

  expect(container.firstChild).toBeDefined();

  const comboBox = screen.getByRole("combobox");
  expect(comboBox).toBeEnabled();
  expect(comboBox).toHaveValue("WY");

  const textBox = screen.getByRole("textbox");
  expect(textBox).toBeEnabled();
  expect(textBox).toHaveValue("999999-999");

  expect(container.firstChild).toMatchSnapshot();
});
