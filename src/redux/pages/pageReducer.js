const initialState = {
  home: true,
};
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME":
      return { home: true };
    case "CART":
      return { home: false, checkout: false };
    case "CHECKOUT":
      return { home: false, checkout: true };
    default:
      return state;
  }
};
export default pageReducer;
