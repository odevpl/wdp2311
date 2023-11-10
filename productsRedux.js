
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) => {
  const productsArray = Object.values(products || {}); 
  return productsArray.filter(item => item.newFurniture === true);
};

const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_FAVORITES = createActionName('ADD_TO_FAVORITES');
const REMOVE_FROM_FAVORITES = createActionName('REMOVE_FROM_FAVORITES');

/* action creators */
export const addToFavorites = payload => ({ payload, type: ADD_TO_FAVORITES });
export const removeFromFavorites = payload => ({ payload, type: REMOVE_FROM_FAVORITES });

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