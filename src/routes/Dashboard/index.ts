import React from 'react';
import { IModule } from '../../core';

const dashboardModule: IModule = {
  label: 'Dashboard',
  icon: 'RectangleGroupIcon',
  path: 'dashboard',
  component: React.lazy(() => import('./Dashboard').then(({ Dashboard }) => ({ default: Dashboard })))
};

export default dashboardModule;
