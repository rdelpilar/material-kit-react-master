export const getPatientInfoState = store => store.patientInfoMap;

export const getPatientInfoList = store =>
  getPatientInfoState(store) ? getPatientInfoState(store).allIds : [];

export const getPatientInfoById = (store, id) =>
  getPatientInfoState(store)
    ? { ...getPatientInfoState(store).byIds[id], id }
    : {};

export const getPatientInfoByIdFilter = (store, id) => {
  return getPatientInfoById(store, id);
};
