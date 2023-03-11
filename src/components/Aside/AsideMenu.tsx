import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const AsideMenu: React.FC<IProps> = ({ children }) => {
  return <ul className="mt-3 flex flex-col items-center">{children}</ul>;
};
