import { useMemo, useState } from 'react';
import { MOCK_ROUTES, SafeRoute } from '../data/routes';

export const useRoutes = () => {
  const [routes] = useState<SafeRoute[]>(MOCK_ROUTES);
  const [selectedRouteId, setSelectedRouteId] = useState<string>(routes[0]?.id);
  const [breakdownRoute, setBreakdownRoute] = useState<SafeRoute | null>(null);

  const selectedRoute = useMemo(
    () => routes.find((route) => route.id === selectedRouteId) ?? routes[0],
    [routes, selectedRouteId],
  );

  const selectRoute = (routeId: string) => setSelectedRouteId(routeId);
  const openBreakdown = (routeId: string) => {
    const match = routes.find((route) => route.id === routeId);
    if (match) setBreakdownRoute(match);
  };
  const closeBreakdown = () => setBreakdownRoute(null);

  return {
    routes,
    selectedRoute,
    selectedRouteId,
    selectRoute,
    breakdownRoute,
    openBreakdown,
    closeBreakdown,
  };
};
