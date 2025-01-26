export enum TAG_TYPES {
    register = "register",
  }
  
  export interface IRegisterResult {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface IRegisterBody {
    email: string;
    password: string;
  }