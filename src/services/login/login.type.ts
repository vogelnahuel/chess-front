export enum TAG_TYPES {
    login = "login",
  }
  
  export interface ILoginResult {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface ILoginBody {
    username: string;
    password: string;
  }