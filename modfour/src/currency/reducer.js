const intialstate = {
  value: "",
  currencies: [],
};

const Reducer = (state = intialstate, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case "STORE_VALUE":
      newState.value = action.payload;
      return newState;
    case "STORE_CURRENCIES":
      newState.currencies = action.payload;
      return newState;
    default:
      return state;
  }

  return state;
};

export default Reducer;
