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

export interface FilteredData {
  [x: string]: string | number
  _id: string;
  prodId:number;
  name: string;
  style:string;
  color: string;
  size: string;
  gender: string;
  imgUrl:string;
  price: number;
  cartImg: string;
  text:string;
  all:string;
  likes: number;
  qty: number;
}

export interface NewProductsData {
  product: [];
  accordian: [];
  searchresults :[];
}

export interface ProductType {
  _id: string;
  prodId:number;
  name: string;
  style:string;
  color: string;
  size: string;
  gender: string;
  imgUrl:string;
  price: number;
  cartImg: string;
  text:string;
  all:string;
  likes: number;
  qty: number;
}

export interface AccordianType {
    _id:string | number
    id: number;
    title:string | null;
    items:Array<string>
}

export interface SearchBarType {
  _id:string;
  id:number;
  name:string;
  options:Array<{
    id:number;
    value:string | null;
    displayValue:string;
  }>;
}

export interface SelectBarType {
  _id:string;
  id:number;
  name:string;
  value:string;
  options:Array<{
    id:number;
    value:string;
    displayValue:string;
  }>;
}

