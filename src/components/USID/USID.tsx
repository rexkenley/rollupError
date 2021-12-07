import { useEffect, useState } from "react";
import { Stack } from "@fluentui/react/lib/Stack";
import {
  ComboBox,
  IComboBox,
  IComboBoxProps,
  IComboBoxOption
} from "@fluentui/react/lib/ComboBox";
import {
  MaskedTextField,
  IMaskedTextFieldProps
} from "@fluentui/react/lib/TextField";

import { masks, options } from "./USIDMasks";

export interface IUSIDProps {
  /**
   * A optional boolean that disables the control.
   */
  disabled?: boolean;
  /**
   * A optional boolean that displays the control.
   */
  visible?: boolean;
  /**
   * A optional boolean that locks the control.
   */
  readOnly?: boolean;
  /**
   * A string text field value.
   */
  value: string;
  /**
   * A string text field value.
   */
  maskChar?: string;
  /**
   * An optional enum value that represents a specific type of ID.
   */
  idType?: IDType;
  /**
   * A function that fires when the text field value is changed
   */
  onValueChange: (newValue?: string) => void;
  /**
   * A function that fires when the dropdown field value is changed
   */
  onIdTypeChange: (newValue?: string) => void;
  /**
   * An optional label
   */
  label?: string;
}

export enum IDType {
  None = "",
  Passport = "Passport",
  AL = "AL",
  AK = "AK",
  AZ = "AZ",
  AR = "AR",
  CA = "CA",
  CO = "CO",
  CT = "CT",
  DE = "DE",
  FL = "FL",
  GA = "GA",
  HI = "HI",
  ID = "ID",
  IL = "IL",
  IN = "IN",
  IA = "IA",
  KS = "KS",
  KY = "KY",
  LA = "LA",
  ME = "ME",
  MD = "MD",
  MA = "MA",
  MI = "MI",
  MN = "MN",
  MS = "MS",
  MO = "MO",
  MT = "MT",
  NE = "NE",
  NV = "NV",
  NH = "NH",
  NJ = "NJ",
  NM = "NM",
  NY = "NY",
  NC = "NC",
  ND = "ND",
  OH = "OH",
  OK = "OK",
  OR = "OR",
  PA = "PA",
  RI = "RI",
  SC = "SC",
  SD = "SD",
  TN = "TN",
  TX = "TX",
  UT = "UT",
  VT = "VT",
  VA = "VA",
  WA = "WA",
  DC = "DC",
  WV = "WV",
  WI = "WI",
  WY = "WY"
}

export default function USID({
  disabled = false,
  visible = true,
  readOnly = false,
  maskChar = " ",
  value = "",
  onValueChange,
  onIdTypeChange,
  label = "",
  idType = IDType.None
}: IUSIDProps): JSX.Element {
  const [currentValue, setCurrentValue] = useState(value),
    [, setComboBoxSelection] = useState<IComboBoxOption>({
      key: "",
      text: ""
    }),
    [maskSelection, setMaskSelection] = useState<string>(),
    maskedTextFieldProps: IMaskedTextFieldProps = {
      disabled,
      readOnly,
      value: currentValue,
      maskChar,
      mask: maskSelection,
      onChange: (
        ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue?: string
      ) => {
        onValueChange && onValueChange(newValue);
        setCurrentValue(newValue || "");
      },
      label
    },
    getMask = (optionKey?: string): string => {
      const mask = Object.entries(masks).find(([key]) => key === optionKey);
      return mask ? mask[1] : "";
    },
    comboBoxProps: IComboBoxProps = {
      disabled: disabled || readOnly,
      options,
      defaultSelectedKey: idType,
      useComboBoxAsMenuWidth: true,
      placeholder: "Select a Form of Identification",
      onChange: (
        event: React.FormEvent<IComboBox>,
        option?: IComboBoxOption
      ) => {
        onIdTypeChange && onIdTypeChange(option?.key.toString());
        setMaskSelection(getMask(option?.key.toString()));

        option && setComboBoxSelection(option);
        setCurrentValue("");
      }
    };

  useEffect(() => {
    setMaskSelection(getMask(idType));
  }, [idType]);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  if (!visible) return <></>;

  return (
    <Stack horizontal tokens={{ childrenGap: 5 }}>
      <ComboBox {...comboBoxProps} />
      <MaskedTextField {...maskedTextFieldProps} />
    </Stack>
  );
}
