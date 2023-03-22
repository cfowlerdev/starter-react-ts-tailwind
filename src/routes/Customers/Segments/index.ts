import { Route } from '@tanstack/react-router';
import { customersRoute } from '../';
import { Segments } from './Segments';

export const segmentsRoute = new Route({
  getParentRoute: () => customersRoute,
  path: 'segments',
  component: Segments
});
