import { ReactRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/rootRoute';
import { dashboardRoute } from './routes/Dashboard';
import { salesRoute } from './routes/Sales';
import { ordersRoute } from './routes/Sales/Orders';
import { invoicesRoute } from './routes/Sales/Invoices';
import { catalogRoute } from './routes/Catalog';
import { categoriesRoute } from './routes/Catalog/Categories';
import { postersRoute } from './routes/Catalog/Posters';
import { customersRoute } from './routes/Customers';
import { customersRoute as customersChildRoute } from './routes/Customers/Customers';
import { segmentsRoute } from './routes/Customers/Segments';

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  salesRoute.addChildren([ordersRoute, invoicesRoute]),
  catalogRoute.addChildren([categoriesRoute, postersRoute]),
  customersRoute.addChildren([customersChildRoute, segmentsRoute])
]);

export const router = new ReactRouter({
  routeTree
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
