import { SHOW_SNACKBAR } from "../actionTypes";
import { Grow } from "@material-ui/core";

const initialState = {
  enable: false,
  vertical: "top",
  horizontal: "right",
  Transition: Grow,
  message: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_SNACKBAR: {
      const { enable, message } = action.payload;
      return {
        ...state,
        enable,
        message
      };
    }
    default:
      return state;
  }
}
