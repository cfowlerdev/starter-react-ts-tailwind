import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Menu: React.FC<IProps> = ({ children }) => {
  return <ul className="space-y-2">{children}</ul>;
};
