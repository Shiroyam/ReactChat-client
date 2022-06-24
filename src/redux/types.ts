export interface IUserAuth {
  _id: string;
  fullName: string;
  email: string;
  password: string;
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
