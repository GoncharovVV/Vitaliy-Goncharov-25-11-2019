import React, { ReactNode } from 'react';
export interface CardListProps {
  children: ReactNode
}

const CardList: React.FC<CardListProps> = ({children}) => {
  return (
    <ul className="cards">
      {children}
    </ul>
  );
}

export default CardList;