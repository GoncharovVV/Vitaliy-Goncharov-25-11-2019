import * as React from 'react';
export interface CardListProps {

}

const CardList: React.FC<CardListProps> = (props) => { 
  return (
    <ul className="cards">
      {props.children}
    </ul>
  );
}

export default CardList;