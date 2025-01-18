import React from "react";
import type { RouteDefFinal, RoutesParseProps } from "../routes.types";

export function RoutesParse(props: RoutesParseProps): RouteDefFinal[] {
  const { defs, loading } = props;

  if (!Array.isArray(defs)) return [];

  return defs.reduce<RouteDefFinal[]>((acc, route) => {
    const { element, children, ...propsRoute } = route;
    let Page: React.ReactNode = null;

    if (element) {
      Page = <React.Suspense fallback={loading}>{element}</React.Suspense>;
    }

    return acc.concat({
      ...propsRoute,
      children: RoutesParse({ defs: children, loading }),
      element: Page !== null ? Page : element,
    } satisfies RouteDefFinal);
  }, []);
}
