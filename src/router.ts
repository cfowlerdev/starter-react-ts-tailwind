import { ReactRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/rootRoute';
import { dashboardRoute } from './routes/Dashboard';

const routeTree = rootRoute.addChildren([dashboardRoute]);

export const router = new ReactRouter({
  routeTree
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
