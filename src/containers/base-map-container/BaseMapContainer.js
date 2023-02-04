// // import React, { useState, useRef, useEffect } from "react";
// // import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// // import NotesContainer from "../notes-container/NotesContainer";
// // import { useDispatch, useSelector } from "react-redux";
// // import { addMarker } from "../../redux/map/mapActions";


// // const BaseMapContainer = (props) => {
// //  const ref = React.useRef(null);
// // const [map, setMap] = React.useState();
// // const [markers, setMarkers] = useState([]);
// // const [selectedMarker, setSelectedMarker] = useState(null);

// //   const dispatch = useDispatch()
// //   const position = useSelector(state = state.map.position)
// // const containerStyle = {
// //   width: '400px',
// //   height: '400px'
// // };

// // const center = {
// //   lat: -3.745,
// //   lng: -38.523
// // };

// // \

// //   const markSetter = (e) => {
// //     setMarkers((current) => [
// //       ...current,
// //       {
// //         id: current.length + 1,
// //         lat: e.latLng.lat(),
// //         lng: e.latLng.lng(),
// //       },
// //     ]);
// //   };

  
// //   React.useEffect(() => {
// //     if (ref.current && !map) {
// //       setMap(new window.google.maps.Map(ref.current, {}));
// //     }
// //   }, [ref, map]);
  
// //   return (
// //   <>
// //   <h1>MAPPPPPPP</h1>
// //       <GoogleMap
// //         mapContainerStyle={containerStyle}
// //         center={center}
// //         zoom={10}
// //         onClick={markSetter}
// //       >
// //                {markers.map((marker) => (
// //           <Marker
// //             key={marker.id}
// //             position={{ lat: marker.lat, lng: marker.lng }}
// //             onClick={() => setSelectedMarker(marker)}
// //       />))}

// // {selectedMarker ? (
// //           <InfoWindow
// //             position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
// //           >
// //             <NotesContainer
// //               position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
// //             />
// //           </InfoWindow>
// //         ) : null}


// //       </GoogleMap>

// //   <div ref={ref} />
// //   </>
// //   )
// // }

// // export default BaseMapContainer

// import React from "react";
// import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import NotesContainer from "../notes-container/NotesContainer";
// import { useSelector, useDispatch } from "react-redux";
// import { addMarker } from "../../redux/map/mapActions";

// const BaseMapContainer = (props) => {
// const dispatch = useDispatch();
// const { markers, selectedMarker } = useSelector(state => state.map);

// const containerStyle = {
// width: '400px',
// height: '400px'
// };

// const center = {
// lat: -3.745,
// lng: -38.523
// };

// const onMapClick = (e) => {
// dispatch(addMarker({
// id: markers.length + 1,
// lat: e.latLng.lat(),
// lng: e.latLng.lng()
// }))
// };

// return (
// <>
// <h1>MAPPPPPPP</h1>
// <GoogleMap
//      mapContainerStyle={containerStyle}
//      center={center}
//      zoom={10}
//      onClick={onMapClick}
//    >
// {markers.map((marker) => (
// <Marker
// key={marker.id}
// position={{ lat: marker.lat, lng: marker.lng }}
// onClick={() => dispatch(addMarker({ id: marker.id }))}
// />
// ))}
// {selectedMarker ? (
// <InfoWindow
// position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
// >
// <NotesContainer
// position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
// />
// </InfoWindow>
// ) : null}
// </GoogleMap>
// </>
// )
// }

// export default BaseMapContainer

// import React, { useState } from "react";
// import { connect, useSelector } from "react-redux";
// import {
// GoogleMap,
// useLoadScript,
// Marker,
// InfoWindow,
// } from "@react-google-maps/api";
// import NotesContainer from "../notes-container/NotesContainer";
// import { addMarker } from "../../redux/map/mapActions";

// const key = process.env.REACT_APP_GOOG_MAP_KEY;
// const lib = ["places"];
// const center = { lat: 40.7675, lng: -73.9758 };
// const mapContainerStyle = {
// height: "100vh",
// width: "100vw",
// };

// function BaseMapContainer(props) {
// const [selectedMarker, setSelectedMarker] = useState(null);
// const markers = useSelector(state = state.map.markers)
// const { isLoaded, loadError } = useLoadScript({
// googleMapsApiKey: key,
// libraries: lib,
// });


// if (loadError) return <h1>"Error loading maps"</h1>;
// if (!isLoaded) return <div>Loading....</div>;


// const markSetter = (e) => {
// props.addMarker({
// lat: e.latLng.lat(),
// lng: e.latLng.lng(),
// });
// };

// return (
// <div>
// <GoogleMap
//      mapContainerStyle={mapContainerStyle}
//      zoom={8}
//      center={center}
//      onClick={markSetter}
//    />
// {props.markers.map((marker) => (
// <Marker
// key={marker.id}
// position={{ lat: marker.lat, lng: marker.lng }}
// onClick={() => setSelectedMarker(marker)}
// />
// ))}


// </div>
// )
// }
// const mapStateToProps = (state) => ({
//   markers: state.map.markers,

//   });
  
//   const mapDispatchToProps = (dispatch) => ({
//   addMarker: (position) => dispatch(addMarker(position)),
//   });
  
//   export default connect(mapStateToProps, mapDispatchToProps)(
// (BaseMapContainer)
//   );

// import React, { useState } from "react";
// import { connect, useSelector } from "react-redux";
// import {
// GoogleMap,
// useLoadScript,
// Marker,
// InfoWindow,
// } from "@react-google-maps/api";
// import NotesContainer from "../notes-container/NotesContainer";
// import { addMarker, setMapState } from "../../redux/map/mapActions";

// const key = process.env.REACT_APP_GOOG_MAP_KEY;
// const lib = ["places"];
// //const center = { lat: 40.7675, lng: -73.9758 };
// const mapContainerStyle = {
// height: "100vh",
// width: "100vw",
// };

// function BaseMapContainer(props) {
// const [selectedMarker, setSelectedMarker] = useState(null);
// const markers = useSelector((state) => state.map.markers)
// const center = useSelector((state) => state.map.center)
// const zoom = useSelector((state) => state.map.zoom)

// const { isLoaded, loadError } = useLoadScript({
// googleMapsApiKey: key,
// libraries: lib,
// });

// if (loadError) return <h1>"Error loading maps"</h1>;
// if (!isLoaded) return <div>Loading....</div>;
// console.log(props)

// const markSetter = (e) => {
// props.addMarker({
 
// lat: e.latLng.lat(),
// lng: e.latLng.lng(),
  
// });
// };
// return (
//   <div>
//     { isLoaded? (
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         zoom={zoom}
//         center={center}
//         onClick={markSetter}

//       >
//         {markers.map((marker) => (
//           <Marker
//             key={marker.id}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             onClick={() => setSelectedMarker(marker)}
//           />
//         ))}
//          {selectedMarker ? (
//           <InfoWindow
//             position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
//           >
//             <NotesContainer
//               position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
//             />
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     ) : (
//       <div>Loading....</div>
//     )}
//   </div>
// );
// }

// const mapStateToProps = (state) => ({
//   center: state.map.center,
//   zoom: state.map.zoom,
//   markers: state.map.markers,
// });

// const mapDispatchToProps = (dispatch) => ({
// addMarker: (position) => dispatch(addMarker(position)),
// setMapState: (center,zoom) => dispatch(setMapState(center,zoom))
// });


// export default connect(mapStateToProps, mapDispatchToProps)(
// (BaseMapContainer)
// );

import React, { useState } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import NotesContainer from "../notes-container/NotesContainer";
import { useSelector, useDispatch } from 'react-redux';

const BaseMapContainer = (props) => {
  const markers = useSelector(state => state.map.markers);
  const selectedMarker = useSelector(state => state.map.selectedMarker);
  const dispatch = useDispatch();

  const key = process.env.REACT_APP_GOOG_MAP_KEY;
  const lib = ["places"];
  const center = { lat: 40.7675, lng: -73.9758 };
  const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: lib,
  });

  if (loadError) return <h1>"Error loading maps"</h1>;
  if (!isLoaded) return <div>Loading....</div>;

  const markSetter = (e) => {
    dispatch({
      type: "ADD_MARKERS",
      payload: [
        ...markers,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        },
      ],
    });
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={markSetter}
      >
        {markers.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() =>
              dispatch({
                type: "ADD_SELECTED_MARKER",
                payload: marker,
              })
            }
          />
        ))}
        {selectedMarker ? (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
          >
            <NotesContainer
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            />
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default BaseMapContainer;
