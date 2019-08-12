import { ADD_PATIENT_INFO, SHOW_SNACKBAR } from "./actionTypes";

export const addPatientInfo = (id, patientInfo) => ({
  type: ADD_PATIENT_INFO,
  payload: {
    id: id,
    patientInfo
  }
});

// Getters should be done by selectors
// export const getPatientInfoById = id => {
//   const action = {
//     type: GET_PATIENT_INFO,
//     id
//   };
//   console.log(1);
//   console.log("Inside the other getPatientInfoById");
//   return action;
// };

export const toggleSnackbar = (enable, message) => ({
  type: SHOW_SNACKBAR,
  payload: {
    enable: enable,
    message: message
  }
});
