import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Aside: React.FC<IProps> = ({ children }) => {
  return (
    <aside className="fixed top-16 left-0 h-screen w-16 bg-paper text-paper-text dark:bg-darkmode-paper dark:text-darkmode-paper-text">
      {children}
    </aside>
  );
};
