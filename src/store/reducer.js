import { ACTION_TYPE } from "./actions";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE:
      return { ...state /* Update state based on action */ };
    default:
      return state;
  }
};
