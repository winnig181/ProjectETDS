export type UserType = {
  id: number;
  name: string;
  email: string;
  nickName: string;
  phone: string;
  about:string;
  avatar: string;
  city: string;
  metro: string;
  publicPhone: string;
  isActivated: string;
  activationLink: string;
  createdAt:Date;
  updatedAt:Date;
};

export type UserState =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'authenticated' } & UserType);

export type AuthState = {
  user: UserState;
  accessToken: string;
};


export type LoginFormData = {
  email: string;
  password: string;
};

export type SignupFormData = {
  email: string;
  name: string;
  password: string;
};

export type AuthSliceState = {
  user: UserState;
  accessToken: string;
};
