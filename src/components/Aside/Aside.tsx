import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

export const Aside: React.FC<IProps> = ({ children }) => {
  return (
    <aside
      className="fixed top-0 left-0 z-40 h-screen w-20 -translate-x-full text-gray-700 transition-transform
      dark:bg-darkmode-surface dark:text-darkmode-surfaceText sm:translate-x-0"
    >
      {children}
    </aside>
  );
};
