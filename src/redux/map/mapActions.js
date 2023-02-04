import MapActionTypes from "./mapTypes"

// export const setMapState = (center, zoom) => ({
//      type: MapActionTypes.SET_MAP_STATE,
//      payload: center, zoom
// })

export const addMarker = (position) => ({
     type: MapActionTypes.ADD_MARKERS,
     payload: position
})

export const addSelectedMarker = (position) =>({
     type: MapActionTypes.addSelectedMarker,
     payload: position
})

