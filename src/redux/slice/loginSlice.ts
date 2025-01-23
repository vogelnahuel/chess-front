import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILogin {
  refreshToken: string;
  accessToken: string;
}

const initialState: ILogin = {
  refreshToken: '',
  accessToken: '',
};

// creating action-reducer slice
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.refreshToken = '';
      state.accessToken = '';
    },
    setLoginData: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      
        state.refreshToken = action.payload;
        state.accessToken = action.payload;
      
    }
  },
});

// Action creators are generated for each case reducer function
export const { logout , setLoginData} = LoginSlice.actions;
export default LoginSlice.reducer;