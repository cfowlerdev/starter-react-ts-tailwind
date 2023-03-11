import React from 'react';
import { Button } from '../../components/Button';

interface IProps {}

export const Dashboard: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Button>Primary Button</Button>
      <br />
      <Button color="secondary" textColor="secondary">
        Secondary Button
      </Button>
      <Button className="bg-blue-600 text-gray-50">Secondary Button</Button>
    </div>
  );
};
