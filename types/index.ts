export interface IUser {
  id?: string;
  name?: string | null | undefined;
  email?: string;
  accessToken?: String;
  role?: string;
}

export interface LoginUserParams {
  email: string;
  password: string;
}
