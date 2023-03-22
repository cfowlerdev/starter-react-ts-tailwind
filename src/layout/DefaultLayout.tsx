import React from 'react';
import { Outlet } from '@tanstack/react-router';
import {
  RectangleGroupIcon,
  PencilIcon,
  PuzzlePieceIcon,
  TableCellsIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';
import { Aside, AsideMenu, AsideMenuItem } from '../components/Aside';
import { Main } from '../components/Main';
import { Navbar } from '../components/Navbar';

interface IProps {}

export const DefaultLayout: React.FC<IProps> = () => {
  return (
    <div>
      <Navbar />
      <Aside>
        <AsideMenu>
          <AsideMenuItem to="/dashboard" label="Dashboard">
            <RectangleGroupIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/typography" label="Typography">
            <PencilIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/components" label="Components">
            <PuzzlePieceIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/tables" label="Tables">
            <TableCellsIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/alerts" label="Alerts">
            <BellAlertIcon className="h-6 w-6" />
          </AsideMenuItem>
        </AsideMenu>
      </Aside>
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};
