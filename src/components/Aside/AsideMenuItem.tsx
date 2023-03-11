import React from 'react';
import { Link } from '@tanstack/react-router';
import { Tooltip } from '../Tooltip';

interface IProps {
  children?: React.ReactNode;
  to?: string;
  label: string;
}

export const AsideMenuItem: React.FC<IProps> = ({ children, label }) => {
  return (
    <li className="mt-2 flex h-12 w-12 items-center justify-center">
      <Tooltip title={label} placement="right">
        <Link className="flex items-center text-center text-secondary hover:text-secondary-lighter">{children}</Link>
      </Tooltip>
    </li>
  );
};
