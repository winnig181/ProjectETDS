import type { UserType } from "../auth";
import type { ItemType } from "../item/item";

export type DealType = {
  id: number;
  ownerId: number;
  tenantId: number;
  itemId: number;
  startDate: Date,
  endDate: Date,
  ownerApproveDeal: boolean;
  ownerCloseDeal: boolean;
  tenantApproveDeal: boolean;
  tenantCloseDeal: boolean;
  Item: ItemType;
  ownerDetails: UserType;
  tenantDetails:UserType;
};


export type DealsState = {
  deals: DealType[];
};


export type DealSliceState = {
  deals: DealType[];
  // currentDeal: DealType | null;
};

export type OwnerDealSliceState = {
  ownerdeals: DealType[];
  currentOwnerDeal: DealType | null;
};

export type AddDealFormData = {
  ownerId: number,
  tenantId: number,
  itemId: number,
  startDate: Date,
  endDate: Date,
  ownerApproveDeal?: boolean,
  ownerCloseDeal?: boolean,
  tenantApproveDeal?: boolean,
  tenantCloseDeal?: boolean,

}