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
};

// export type AddDealFormData = {

// };

export type DealsState = {
  deals: DealType[];
};


export type DealSliceState = {
  deals: DealType[];
  // currentDeal: DealType | null;
};