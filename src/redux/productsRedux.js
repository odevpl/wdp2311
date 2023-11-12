/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) => {
  const productsArray = Object.values(products || {});
  return productsArray.filter(item => item.newFurniture === true);
};

export const allPromotional = ({ promotional }) => promotional;
const UPDATE_YOUR_STARS_RATE = 'UPDATE_YOUR_STARS_RATE';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const addStarsRating = payload => ({ type: UPDATE_YOUR_STARS_RATE, payload });
export const addToFavorites = payload => ({ type: ADD_TO_FAVORITES, payload });
export const removeFromFavorites = payload => ({
  type: REMOVE_FROM_FAVORITES,
  payload,
});
/* reducer */
const initialState = {
  favorites: {},
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const { id } = action.payload;
      const updatedFavorites = { ...statePart.favorites, [id]: true };

      return {
        ...statePart,
        favorites: updatedFavorites,
      };
    }

    case REMOVE_FROM_FAVORITES: {
      const { id } = action.payload;
      const updatedFavorites = { ...statePart.favorites };
      delete updatedFavorites[id];

      return {
        ...statePart,
        favorites: updatedFavorites,
      };
    }

    default:
      return statePart;
  }
}
