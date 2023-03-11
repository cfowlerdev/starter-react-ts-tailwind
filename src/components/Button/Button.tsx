import React from 'react';
import { clsx } from 'clsx';

interface IProps {
  children?: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'error';
  textColor?: 'primary' | 'secondary' | 'info' | 'warning' | 'error';
  size?: 'xs' | 'sm' | 'ms' | 'lg' | 'xl';
  variant?: 'solid' | 'outlined';
  disabled?: boolean;
  loading?: boolean;
}

// text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
export const Button: React.FC<IProps> = ({
  children,
  color,
  textColor,
  size,
  variant,
  disabled,
  loading,
  className
}) => {
  const classes = clsx([
    className,
    (color == 'primary' || color == 'secondary') &&
      `bg-${color} dark:bg-darkmode-${color} hover:bg-${color}Darker dark:hover:bg-darkmode-${color}Darker`,
    color == 'secondary' && 'bg-secondary dark:bg-darkmode-secondary',
    textColor == 'primary' && 'text-primaryText dark:text-darkmode-primaryText',
    textColor == 'secondary' && 'text-secondaryText dark:text-darkmode-secondaryText',
    'rounded-lg',
    'px-5',
    'py-2.5',
    'mr-2',
    'mb-2',
    'focus:ring-2',
    'font-medium',
    'text-sm'
  ]);

  return <button className={classes}>{children}</button>;
};
