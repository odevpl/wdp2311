/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });

/* reducer */
const initialState = {
  products: [], // Dodaj tę właściwość
};

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }

    default:
      return statePart;
  }
}
