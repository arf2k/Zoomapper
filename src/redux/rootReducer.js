import { combineReducers } from "redux";
import mapReducer from "./map/mapReducer"
import notesReducer from "./notes/notesReducer";


const rootReducer = combineReducers({
     map: mapReducer,
     notes: notesReducer
})

export default rootReducer