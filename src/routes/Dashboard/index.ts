import { Route } from '@tanstack/react-router';
import { rootRoute } from '../rootRoute';
import { Dashboard } from './Dashboard';

export const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: Dashboard
});
