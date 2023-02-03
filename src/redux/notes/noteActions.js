import NoteActionTypes from "./noteTypes";

export const addNote = (note) => ({
     type: NoteActionTypes.ADD_NOTE,
     payload: note
})

export const deleteNote = (key) => ({
     type: NoteActionTypes.DELETE_NOTE,
     payload: key
})