import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Aside: React.FC<IProps> = ({ children }) => {
  return <aside className="fixed top-16 left-0 h-screen w-16 bg-yellow-500">{children}</aside>;
};
