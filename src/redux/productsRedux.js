/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

export const allPromotional = ({ promotional }) => promotional;
export const addStarsRating = payload => ({ type: UPDATE_YOUR_STARS_RATE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
