import { Route } from '@tanstack/react-router';
import { catalogRoute } from '../';
import { Posters } from './Posters';

export const postersRoute = new Route({
  getParentRoute: () => catalogRoute,
  path: 'posters',
  component: Posters
});
