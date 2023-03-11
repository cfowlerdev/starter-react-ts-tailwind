import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { Aside } from '../components/Aside';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import { Menu, MenuItem } from '../components/Menu';
import { Outlet } from '@tanstack/react-router';
import { Toggle } from '../components/Toggle';
import { Button } from '../components/Button';

interface IProps {}

export const DefaultLayout: React.FC<IProps> = () => {
  return (
    <div className="flex h-full flex-row">
      <Aside>
        <Menu>
          <MenuItem>
            <BeakerIcon />
          </MenuItem>
        </Menu>
        <ThemeSwitcher />
      </Aside>
      <div className="flex p-4 dark:bg-black sm:ml-20">
        <Outlet />
      </div>
    </div>
  );
};
