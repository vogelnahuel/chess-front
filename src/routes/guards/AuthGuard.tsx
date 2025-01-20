import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthGuardProps } from "./guards.types";
import * as URL from "../utils/_url";
import { getLocalStorage } from "../../utils/localStorage";
import { JSX } from "react/jsx-runtime";
import Login from "../../pages/Login";

export const AuthGuard = (props: AuthGuardProps): JSX.Element => {
  const { isPublic = false } = props;
  const token = getLocalStorage("token");



  useEffect(() => {
    if (!isPublic && token) {
      return;
    }
  }, [token, isPublic]);


  if (isPublic) return <Outlet />;
  if (!token) {
    return <Navigate to={URL.ROUTE_URL_LOGIN} replace />;
  }
  return <Login />;
};
