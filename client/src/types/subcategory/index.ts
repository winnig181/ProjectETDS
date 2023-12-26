export type SubcatType={
    id: number;
    categoryId: number;
    subCategoryName: string;
}

export type SubcatsState = {
    subcats: SubcatType[];
  };  
  
  export type SubcatSliceState = {
    subcats: SubcatType[];
  };
  