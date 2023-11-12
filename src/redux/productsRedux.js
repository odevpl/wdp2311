/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const allPromotional = ({ promotional }) => promotional;
const UPDATE_YOUR_STARS_RATE = 'UPDATE_YOUR_STARS_RATE';
export const addStarsRating = payload => ({ type: UPDATE_YOUR_STARS_RATE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_YOUR_STARS_RATE:
      return statePart.map(product =>
        product.id === action.payload.id ? { ...product, ...action.payload } : product
      );
    default:
      return statePart;
  }
}
