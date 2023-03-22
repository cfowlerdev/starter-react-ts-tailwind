import { Route } from '@tanstack/react-router';
import { catalogRoute } from '../';
import { Categories } from './Categories';

export const categoriesRoute = new Route({
  getParentRoute: () => catalogRoute,
  path: 'categories',
  component: Categories
});
