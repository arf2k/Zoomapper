import MapActionTypes from "./mapTypes";

const INITIAL_STATE = {
  position: [
  ],
  saved: false
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MapActionTypes.ADD_MARKER:
      return {
        ...state,
        position: [...state.position, action.payload],
        saved: true 
      };

    default:
      return state;
  }
};

export default mapReducer;
