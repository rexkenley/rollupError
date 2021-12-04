/* istanbul ignore file */

export enum AddressType {
  BillTo = "Bill To",
  ShipTo = "Ship To",
  Primary = "Primary",
  Other = "Other"
}

export interface IAddress {
  /**
   * Address id
   */
  addressId: string;
  /**
   * Address name
   */
  name: string;
  /**
   * Address type
   */
  addressType: AddressType;
  /**
   * Address line 1
   */
  line1: string;
  /**
   * Address line 2
   */
  line2: string;
  /**
   * Address line 3
   */
  line3: string;
  /**
   * Address city
   */
  city: string;
  /**
   * Address state or province
   */
  stateOrProvince: string;
  /**
   * Address postal code
   */
  postalCode: string;
  /**
   * Address country
   */
  country: string;
  /**
   * An optional address county
   */
  county?: string;
  /**
   * An optional address latitude
   */
  latitude?: number;
  /**
   * An optional address longitude
   */
  longitude?: number;
  /**
   * An optional address post office box
   */
  postOfficeBox?: string;
}
