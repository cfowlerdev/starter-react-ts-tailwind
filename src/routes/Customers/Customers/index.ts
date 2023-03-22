import { Route } from '@tanstack/react-router';
import { customersRoute as customersParentRoute } from '../';
import { Customers } from './Customers';

export const customersRoute = new Route({
  getParentRoute: () => customersParentRoute,
  path: 'customers',
  component: Customers
});
