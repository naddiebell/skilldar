const reducer = (state, action) => {
    switch (action.type) {
      case "setProject":
        return {
          ...state,
          project: action.data,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  