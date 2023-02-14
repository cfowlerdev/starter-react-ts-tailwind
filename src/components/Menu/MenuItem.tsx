import { Link } from '@tanstack/react-router';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
  to?: string;
}

export const MenuItem: React.FC<IProps> = ({ children }) => {
  return (
    <li>
      <Link className="flex items-center p-2 text-base font-normal dark:text-darkmode-primary">{children}</Link>
    </li>
  );
};
