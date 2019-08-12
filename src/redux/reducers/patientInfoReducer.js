import { ADD_PATIENT_INFO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PATIENT_INFO: {
      const { id, patientInfo } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            patientInfo
          }
        }
      };
    }
    default:
      return state;
  }
}
