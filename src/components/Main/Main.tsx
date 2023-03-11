import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Main: React.FC<IProps> = ({ children }) => {
  return (
    <div className="flex h-screen flex-wrap pt-16 pl-16">
      <main className="m-4 flex-auto">{children}</main>
    </div>
  );
};
