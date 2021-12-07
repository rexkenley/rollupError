import { SelectableOptionMenuItemType } from "@fluentui/react";

export const masks = {
  Passport: "a999999",
  AL: "9999999",
  AK: "9999999",
  AZ: "*99999999",
  AR: "999999999",
  CA: "a9999999",
  CO: "99-999-9999",
  CT: "999999999",
  DE: "9999999",
  FL: "a999-999-99-999-9",
  GA: "999999999",
  HI: "a99999999",
  ID: "aa999999a",
  IL: "a999-9999-9999",
  IN: "9999-99-9999",
  IA: "999**9999",
  KS: "a99-99-9999",
  KY: "a99-999-999",
  LA: "999999999",
  ME: "9999999",
  MD: "a-999-999-999-999",
  MA: "S999999999",
  MI: "a 999 999 999 999",
  MN: "a999-999-999-999",
  MS: "999-99-9999",
  MO: "a999999999",
  MT: "9999999999999",
  NE: "a99999999",
  NV: "9999999999",
  NH: "9999999999",
  NJ: "a9999-99999-99999",
  NM: "999999999",
  NY: "999 999 999",
  NC: "999999999999",
  ND: "aaa-99-9999",
  OH: "aa999999",
  OK: "a999999999",
  OR: "9999999",
  PA: "99 999 999",
  RI: "9999999",
  SC: "999999999",
  SD: "99999999",
  TN: "999999999",
  TX: "99999999",
  UT: "999999999",
  VT: "9999999*",
  VA: "a99-99-9999",
  WA: "aaa\\*\\*aa999a9",
  DC: "9999999",
  WV: "*999999",
  WI: "a999-9999-9999-99",
  WY: "999999-999"
};

export const options = [
  {
    key: "federalIds",
    text: "Federal IDs",
    itemType: SelectableOptionMenuItemType.Header
  },
  ...Object.keys(masks)
    .filter((element) => element.length !== 2)
    .map((element) => {
      return { key: element, text: element };
    }),
  {
    key: "stateIds",
    text: "State IDs",
    itemType: SelectableOptionMenuItemType.Header
  },
  ...Object.keys(masks)
    .filter((element) => element.length === 2)
    .map((element) => {
      return { key: element, text: element };
    })
];
