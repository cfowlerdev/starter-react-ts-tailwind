import { Route } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';

export const customersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'customers'
});
