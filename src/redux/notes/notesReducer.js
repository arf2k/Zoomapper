import NoteActionTypes from "./noteTypes";

const INITIAL_STATE = {
  notes: [],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NoteActionTypes.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case NoteActionTypes.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note, i) => i !== action.payload),
      };
    default:
      return state;
  }
};

export default notesReducer;
