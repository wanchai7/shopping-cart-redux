const initialState = {
  home: true,
};
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Home":
      return { home: true };
    case "CART":
      return { home: false };
    default:
      return state;
  }
};
export default pageReducer;
