import { ReactRouter, RootRoute, Route } from '@tanstack/react-router';
import { IModule } from './core';
import { DefaultLayout } from './layout';
import appModules from './routes/modules';

const buildRoutes = (parentModule: any, modules: Array<IModule>): Array<Route> => {
  return modules.map((module) => {
    const moduleRoute = new Route({
      getParentRoute: () => parentModule,
      path: module.path,
      component: module.component
    });
    if (module.children && module.children.length > 0) {
      const childRoutes = buildRoutes(moduleRoute, module.children);
      moduleRoute.addChildren(childRoutes);
    }
    return moduleRoute;
  });
};

export const rootRoute = new RootRoute({
  component: () => {
    return <DefaultLayout />;
  }
});

const routeTree = rootRoute.addChildren(buildRoutes(rootRoute, appModules));

export const router = new ReactRouter({
  routeTree
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
