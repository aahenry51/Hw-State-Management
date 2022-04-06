export const userReducer = (state, action) => {
  switch (action.type) {
    case 'changeName':
      return {
        ...state.user,
        firstName: action.value,
      };
    case 'lastName':
      return {
        ...state.user,
        lastName: action.value,
      };
    default:
      return state.user;
  }
};
