export enum TAG_TYPES {
    profile = "profile",
  }
  
  export interface IProfileResult {
    accessToken: string;
    refreshToken: string;
  }
  
  export interface IProfileQuery{
    id: number;
  }