/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => {
  return cart.products.reduce((total, product) => total + product.qty, 0);
};

export const getFee = ({ cart }) => cart.deliveryFee;
/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const PROCEED_TO_CHECKOUT = createActionName('PROCEED_TO_CHECKOUT');
const QTY_CHANGE = createActionName('QTY_CHANGE');

/* action creators */
export const addProductToCart = payload => ({ payload, type: ADD_PRODUCT });

export const removeProductFromCart = payload => ({ payload, type: REMOVE_PRODUCT });

export const proceedToCheckout = () => ({ type: PROCEED_TO_CHECKOUT });

export const qtyChange = payload => ({ type: QTY_CHANGE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }

    case REMOVE_PRODUCT:
      return {
        ...statePart,
        products: [
          ...statePart.products.filter(product => product.id !== action.payload),
        ],
      };

    case PROCEED_TO_CHECKOUT:
      return {
        ...statePart,
        products: [],
      };

    case QTY_CHANGE:
      return {
        ...statePart,
        products: [
          ...statePart.products.map(product =>
            product.id === action.payload.id
              ? { ...product, ...action.payload }
              : product
          ),
        ],
      };

    default:
      return statePart;
  }
}
