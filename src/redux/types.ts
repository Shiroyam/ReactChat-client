export interface IUserAuth {
  user: IUserReg;
  token: string;
}
export interface IUserLogIn {
  email: string;
  password: string;
}

export interface IUserReg {
  _id: string;
  fullName: string;
  email: string;
  password: string;
}

export interface IUserSingIn {
  fullName: string;
  email: string;
  password: string;
}

export interface IUser {
  _id: string;
  email: string;
  fullname: string;
  password: string;
  confirmed: boolean;
  last_seen: string;
  createdAt: string;
  updatedAt: string;
}

export interface ILastMessage {
  text: string;
}
export interface IDialog {
  _id: string;
  partner: IUser;
  author: IUser;
  lastMessage: ILastMessage;
}