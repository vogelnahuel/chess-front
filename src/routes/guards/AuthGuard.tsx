import { Navigate, Outlet } from "react-router-dom";

import { AuthGuardProps } from "./guards.types";
import * as URL from "../utils/_url";
import { getLocalStorage } from "../../utils/localStorage";
import { JSX } from "react/jsx-runtime";

export const AuthGuard = (props: AuthGuardProps): JSX.Element => {
  const { isPublic = false } = props;
  const token = getLocalStorage("token");

  // Si la ruta es pública, permitimos el acceso
  if (isPublic) {
    return <Outlet />;
  }

  // Si no hay token, redirigimos al login
  if (!token) {
    return <Navigate to={URL.ROUTE_URL_LOGIN} replace />;
  }

  // Si hay token y la ruta es privada, renderizamos las rutas hijas
  return <Outlet />;
};
