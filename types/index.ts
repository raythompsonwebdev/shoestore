export interface IUser {
  id?: string;
  email?: string;
  role?: string;
  name?: string | null | undefined;
  accessToken?: String;
}

export interface LoginUserParams {
  email: string;
  password: string;
}
