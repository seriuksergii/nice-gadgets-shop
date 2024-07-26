import React from 'react';

interface GridItemProps {
  children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
  return <div className="grid-item">{children}</div>;
};


