export const INITIAL_STATE = {
  name: "",
  price: 0,
  size: "",
  color: "green",
  quantity: 0,
};

export const FormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "RADIO":
      return {
        ...state,
        color: action.payload.value,
      };
    case "INCREASE":
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    case "DECREASE":
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
