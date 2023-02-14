import React from 'react';
import { RootRoute } from '@tanstack/react-router';
import { DefaultLayout } from '../layout';

export const rootRoute = new RootRoute({
  component: () => {
    return <DefaultLayout />;
  }
});
