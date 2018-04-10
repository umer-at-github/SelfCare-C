import * as types from '../actions/actionTypes';

const initialState = {
  name: "",
  dose: "",
  first_dose: "",
  prescribed: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MEDICATION:
      return action.medicationFormData;

    case types.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}