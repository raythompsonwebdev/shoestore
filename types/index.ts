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
  color: string
  style: string
  size: string
  gender: string
  price: string
  cartImg: string;
  imgUrl:string;
  name: string;
  prodId:number;
  _id: string;
}

export interface NewProductsData {
  product: [];
  accordian: [];
  searchresults :[];
}

export interface Product {
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

export interface Accordian {
    _id:string | number
    id: number;
    title:string | null;
    items:Array<string>
}

export interface SearchBar {
  _id:string;
  id:number;
  name:string;
  options:Array<{
    id:number;
    value:string | null;
    displayValue:string;
  }>;
}

export interface SelectBar {
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

