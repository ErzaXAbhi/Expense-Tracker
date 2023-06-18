export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANASACTION":
      return {
        ...state,
        transacations: state.transacations.filter(
          (transacation) => transacation.id !== action.payload
        ),
      };

    case "ADD_TRANSACATION":
      return {
        ...state,
        transacations: [action.payload, ...state.transacations],
      };
    default:
      return state;
  }
};
