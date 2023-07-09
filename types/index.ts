export interface IUser {
  id?: string;
  name?: string | null | undefined;
  email?: string;
  accessToken?: string;
  role?: string;
}

export interface LoginUserParams {
  email: string;
  password: string;
}


export interface AllData {
  product: [];
  accordian: [];
  searchresults :[];
  selectresults: [];
}

export interface FiliterProp {
    [x: string]: string | number
    color: string
    style: string
    size: string
    gender: string
    price: string
}

export interface NewData {
  product: [];
  accordian: [];
  searchresults :[];
}
