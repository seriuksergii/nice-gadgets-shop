import React from 'react';
import './Grid.scss';

interface GridProps {
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};



