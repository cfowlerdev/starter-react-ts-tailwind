import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Navbar: React.FC<IProps> = ({ children }) => {
  return (
    <nav className="fixed top-0 left-0 z-20 h-16 w-full bg-paper text-paper-text dark:bg-darkmode-paper dark:text-darkmode-paper-text">
      <div className="container flex">
        <div className="flex h-16 w-16 items-center bg-paper-darker dark:bg-darkmode-paper-darker">Logo Here</div>
        <div className="flex items-center px-4">Dashboard</div>
        <div className="flex items-center justify-center px-4">Menu</div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">Right</div>
      </div>
    </nav>
  );
};
