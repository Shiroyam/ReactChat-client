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
