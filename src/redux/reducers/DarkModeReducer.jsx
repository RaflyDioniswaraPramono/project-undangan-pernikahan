import { DARK_MODE } from "../action-type";

const initialState = {
  darkMode: false,
};

const darkModeToggler = (state = initialState, action) => {
  if (action.type === DARK_MODE) {
    if (!state.darkMode) {
      return {
        ...state,
        darkMode: (state.darkMode = false),
      };
    } else {
      return {
        ...state,
        darkMode: (state.darkMode = true),
      };
    }
  }

  return {
    ...state,
  };
};

export default darkModeToggler;