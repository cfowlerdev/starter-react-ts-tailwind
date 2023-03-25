import React from 'react';
import { IModule } from '../../core';

const catalogModule: IModule = {
  label: 'Catalog',
  icon: 'RectangleGroupIcon',
  path: 'catalog',
  children: [
    {
      label: 'Posters',
      path: 'posters',
      component: React.lazy(() => import('./Posters').then(({ Posters }) => ({ default: Posters }))),
      priority: 1
    },
    {
      label: 'Categories',
      path: 'categories',
      component: React.lazy(() => import('./Categories').then(({ Categories }) => ({ default: Categories }))),
      priority: 2
    }
  ]
};

export default catalogModule;
