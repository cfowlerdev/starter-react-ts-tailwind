import React from 'react';

export interface IModule {
  label?: string;
  icon?: any; // TODO: type?
  path: string;
  component?: React.LazyExoticComponent<React.FC>;
  priority?: number;
  protected?: boolean;
  admin?: boolean;
  children?: Array<IModule>;
}
