import { Route } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';

export const catalogRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'catalog'
});
