import { IModule } from '../core';
import dashboardModule from './Dashboard';
import salesModule from './Sales';
import catalogModule from './Catalog';
import customersModule from './Customers';

const modules: Array<IModule> = [dashboardModule, salesModule, catalogModule, customersModule];

export default modules;
