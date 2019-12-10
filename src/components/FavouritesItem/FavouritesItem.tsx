import React from 'react';
import Spinner from '../Spinner/indexs';
export interface FavouritesItemProps {
  localizedName: string;
  isLoading: boolean;
  imgUrl: string;
  type: string;
  temperature: string;
  onClick: () => any;
}

const FavouritesItem: React.SFC<FavouritesItemProps> = ({
  localizedName,
  isLoading,
  type,
  imgUrl,
  temperature,
  onClick
}) => {
  return (
    <li className="card-item">
      <button className="card-item__content" onClick={onClick}>
        <p className="card-item__date">{localizedName}</p>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <img src={imgUrl} className="card-item__image" alt={type} />
            <h3 className="card-item__title">{type}</h3>
            <div className="card-item__temp">{temperature}</div>
          </>
        )}
      </button>
    </li>
  );
};

export default FavouritesItem;
