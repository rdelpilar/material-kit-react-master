import { combineReducers } from "redux";
import patientInfoMap from "./patientInfoReducer";
import snackbarMap from "./snackbarReducer";

export default combineReducers({ patientInfoMap, snackbarMap });
