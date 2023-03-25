import React from 'react';
import { IModule } from '../../core';

const salesModule: IModule = {
  label: 'Sales',
  icon: 'RectangleGroupIcon',
  path: 'sales',
  children: [
    {
      label: 'Orders',
      path: 'orders',
      component: React.lazy(() => import('./Orders').then(({ Orders }) => ({ default: Orders }))),
      priority: 1
    },
    {
      label: 'Invoices',
      path: 'invoices',
      component: React.lazy(() => import('./Invoices').then(({ Invoices }) => ({ default: Invoices }))),
      priority: 2
    }
  ]
};

export default salesModule;
