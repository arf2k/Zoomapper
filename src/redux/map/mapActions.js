import MapActionTypes from "./mapTypes"

export const addMarker = (position) => ({
     type: MapActionTypes.ADD_MARKER,
     payload: position
})

