import React from 'react';
export interface CardListProps {
  children: React.ReactNode
}

const CardList: React.FC<CardListProps> = ({children}) => {
  return (
    <ul className="cards">
      {children}
    </ul>
  );
}

export default CardList;