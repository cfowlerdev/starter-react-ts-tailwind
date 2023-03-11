import React from 'react';

interface IProps {
  children?: React.ReactNode;
  title: string;
  placement?: 'left' | 'top' | 'right' | 'bottom';
}

export const Tooltip: React.FC<IProps> = ({ children, title }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
