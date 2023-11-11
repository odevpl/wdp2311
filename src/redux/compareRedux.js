/* selectors */
export const getAll = state => state.productsToCompare;

/* action name creator */
const reducerName = 'productsToCompare';
const createActionName = name => `app/${reducerName}/${name}`;

// actions
const ADD_PRODUCT_TO_COMPARE = createActionName('ADD_PRODUCT_TO_COMPARE');
const REMOVE_PRODUCT_TO_COMPARE = createActionName('REMOVE_PRODUCT_TO_COMPARE');

// action creators
export const addProductToCompare = payload => ({
  payload,
  type: ADD_PRODUCT_TO_COMPARE,
});
export const removeProductToCompare = payload => ({
  type: REMOVE_PRODUCT_TO_COMPARE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT_TO_COMPARE: {
      const newProductToCompare = action.payload;
      const isAlreadyAdded = statePart.some(
        product => product.name === newProductToCompare.name
      );

      if (statePart.length < 4 && !isAlreadyAdded) {
        const updatedProducts = [...statePart, newProductToCompare].slice(0, 4);
        return updatedProducts;
      }
      return statePart;
    }
    case REMOVE_PRODUCT_TO_COMPARE:
      return statePart.filter(product => product.name !== action.payload);
    default:
      return statePart;
  }
}
