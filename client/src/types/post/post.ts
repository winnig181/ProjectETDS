import type { UserType } from "../auth";

export type PostType = {
  id: number;
  title: string;
  body: string;
  userId: number;
  User?: UserType;
};

export type AddPostFormData={
  title: string;
  body: string;
}

export type PostSliceState = {
  posts: PostType[];
};