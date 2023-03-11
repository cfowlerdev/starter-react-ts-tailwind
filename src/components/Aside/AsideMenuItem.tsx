import React from 'react';
import { Link } from '@tanstack/react-router';

interface IProps {
  children?: React.ReactNode;
  to?: string;
}

export const AsideMenuItem: React.FC<IProps> = ({ children }) => {
  return (
    <li className="mt-2 flex h-12 w-12 items-center justify-center">
      <Link className="flex items-center text-center text-secondary hover:text-secondary-lighter">{children}</Link>
    </li>
  );
};
