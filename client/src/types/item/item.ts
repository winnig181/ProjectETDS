export type ItemType = {
  id: number;
  price:number;
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  condition: string;
  status: string;
  hidden: boolean;
  subCategoryId:number;
  userId:number;
  createdAt: Date;
  updatedAt: Date;
  isActivated:boolean;
  activationLink:string;
};

export type AddItemFormData = {
  price:number;
  title: string;
  description: string;
  img1: string;
  img2: string;
  img3: string;
  condition: string;
  status: string;
  hidden: boolean;
  subCategoryId:number;
};

export type ItemsState = {
  items: ItemType[];
};


export type ItemSliceState = {
  items: ItemType[];
  currentNote: ItemType | null;
};
