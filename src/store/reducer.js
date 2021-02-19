const reducer = (state, action) => {
    switch (action.type) {
      case "setProject":
        return {
          ...state,
          project: action.data,
        };
        case "setSearchTerm":
          return {
            project: {
              ...state.project,
              search_term: action.data,
            },
          };
      default:
        return state;
    }
  };
  
  export default reducer;
  