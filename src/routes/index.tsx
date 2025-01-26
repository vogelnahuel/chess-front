import { lazy } from "react";
import * as URL from "./utils/_url";
import { AuthGuard } from "./guards";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutesParse } from "./utils";

import { ROUTE_PARAM_WILDCARD } from "../redux/utils";

const ClubPage = lazy(() => import("../pages/Club"));
const DashboardPage = lazy(() => import("../pages/Dashboard"));
const ChessPage = lazy(() => import("../pages/Game"));
const LoginPage = lazy(() => import("../pages/Login"));
const ProfilePage = lazy(() => import("../pages/Profile"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));
const RecoveryPage = lazy(() => import("../pages/Recovery"));
const RegisterPage = lazy(() => import("../pages/Register"));


export const ROUTES_DEF = [
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard />,
    children: [
      {
        path: URL.ROUTE_URL_ROOT,
        element: <Navigate to={URL.ROUTE_URL_LOGIN} />,
      },
      { element: <ClubPage />, path: URL.ROUTE_URL_CLUB },
      { element: <DashboardPage />, path: URL.ROUTE_URL_DASHBOARD },
      { element: <ChessPage />, path: URL.ROUTE_URL_GAME },
      { element: <ProfilePage />, path: URL.ROUTE_URL_PROFILE },

    ],
  },
  {
    path: URL.ROUTE_URL_RECOVERY,
    element: <AuthGuard isPublic />,
    children: [{ element: <RecoveryPage />, path: URL.ROUTE_URL_RECOVERY }],
  },
  {
    path: URL.ROUTE_URL_REGISTER,
    element: <AuthGuard isPublic />,
    children: [{ element: <RegisterPage />, path: URL.ROUTE_URL_REGISTER }],
  },
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard isPublic />,
    children: [{ element: <LoginPage />, path: URL.ROUTE_URL_LOGIN }],
  },
  { element: <NotFoundPage />, path: ROUTE_PARAM_WILDCARD },
];

export const ROUTES = RoutesParse({
  loading: <h1 className="text-center">Loading...</h1>,
  defs: ROUTES_DEF,
});

export const router = createBrowserRouter(ROUTES);
