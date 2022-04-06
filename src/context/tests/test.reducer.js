export const userReducer = (state, action) => {
  switch (action.type) {
    case 'changeMathScore':
      return {
        ...state.user,
        mathScore: action.value,
      };
    case 'changeHistoryScore':
      return {
        ...state.user,
        historyScore: action.value,
      };

    default:
      return state.user;
  }
};
