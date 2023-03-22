import { Route } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';

export const salesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'sales'
});
