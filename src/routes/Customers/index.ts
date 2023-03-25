import React from 'react';
import { IModule } from '../../core';

const customersModule: IModule = {
  label: 'Customers',
  icon: 'RectangleGroupIcon',
  path: 'customers',
  children: [
    {
      label: 'Customers',
      path: 'customers',
      component: React.lazy(() => import('./Customers').then(({ Customers }) => ({ default: Customers }))),
      priority: 1
    },
    {
      label: 'Segments',
      path: 'segments',
      component: React.lazy(() => import('./Segments').then(({ Segments }) => ({ default: Segments }))),
      priority: 2
    }
  ]
};

export default customersModule;
