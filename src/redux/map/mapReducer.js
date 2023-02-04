import MapActionTypes from "./mapTypes";

const INITIAL_STATE = {
  // position : [],
  // saved: false,
  // center: {
  //   lat: 37.7749,
  //   lng: -122.4194
  // },
  // zoom: 12
markers: [{lat: 40.7675, lng: -73.9785}],
selectedMarker: null

};

// const mapReducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case MapActionTypes.SET_MAP_STATE:
//       return {
//         ...state,
//         center: action.center,
//         zoom: action.zoom
//       }
//     case MapActionTypes.ADD_MARKER:
//       return {
//         ...state,
//         position: [...state.position, action.payload],
//         saved: true 
//       };

//     default:
//       return state;
//   }
// };

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_MARKERS":
      return { ...state, markers: action.payload };
    case "ADD_SELECTED_MARKER":
      return { ...state, selectedMarker: action.payload };
    default:
      return state;
  }
};

export default mapReducer;
