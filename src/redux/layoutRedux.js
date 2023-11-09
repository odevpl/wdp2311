/* selectors */
export const getLayout = state => state.layout;

/* action name creator */
const reducerName = 'layout';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const SET_LAYOUT = createActionName('SET_LAYOUT');

/* action creators */
export const setLayout = payload => ({ payload, type: SET_LAYOUT });

/* reducer */
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SET_LAYOUT:
      return (statePart = action.payload);
    default:
      return statePart;
  }
}
