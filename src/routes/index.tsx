import { lazy } from "react";
import * as URL from "./utils/_url";
import { AuthGuard } from "./guards";
import { createBrowserRouter } from "react-router-dom";
import { RoutesParse } from "./utils";

import { ROUTE_PARAM_WILDCARD } from "../redux/utils";

const NotFoundPage = lazy(() => import("../pages/NotFound"));
const LoginPage = lazy(() => import("../pages/Login"));
const ChessPage = lazy(() => import("../pages/Game"));


export const ROUTES_DEF = [
  {
    path: URL.ROUTE_URL_ROOT,
    element: <AuthGuard />,
    children: [
      // {
      //   path: URL.ROUTE_URL_ROOT,
      //   element: <Navigate to={URL.ROUTE_URL_GAME} />,
      // },
      // { element: <HomePage />, path: URL.ROUTE_URL_HOME },
      // { element: <ForecastPage />, path: URL.ROUTE_URL_FORECAST },
      // { element: <WorksheetPage />, path: URL.ROUTE_URL_WORKSHEET },
    ],
  },
  {
    path: URL.ROUTE_URL_GAME,
    element: <AuthGuard isPublic />,
    children: [{ element: <ChessPage />, path: URL.ROUTE_URL_GAME }],
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
