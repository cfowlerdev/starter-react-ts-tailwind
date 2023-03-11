import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Navbar: React.FC<IProps> = ({ children }) => {
  return (
    <nav className="fixed top-0 left-0 z-20 h-16 w-full bg-blue-200">
      <div className="container flex">
        <div className="flex h-16 w-16 items-center bg-primary">Logo Here</div>
        <div className="flex items-center px-4">Dashboard</div>
        <div className="flex items-center justify-center px-4">Menu</div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">Right</div>
      </div>
    </nav>
  );
};
