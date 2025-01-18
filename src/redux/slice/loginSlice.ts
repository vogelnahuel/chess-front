import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ILogin {
  refreshToken: string;
}

const initialState: ILogin = {
  refreshToken: '',
};

// creating action-reducer slice
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.refreshToken = '';
    },
    setLoginData: (state, action: PayloadAction<ILogin>) => {
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout , setLoginData} = LoginSlice.actions;
export default LoginSlice.reducer;