import { favouritesList } from '../../dummyData';
const updateFavouritesList = (state: any, action: any) => {
  if (!state) {
    return {
      items: [...favouritesList],
    }
  };
  switch(action.type) {
    case 'FAVOURITES_LIST_UPDATED':
      return {
        items: action.payload,
      }
    default:
      return state.favouritesList;
  };
};
export default updateFavouritesList;