import React from "react";
import BaseMapContainer from "../../src/containers/base-map-container/BaseMapContainer"
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Mapper = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <>
    <Wrapper apiKey={"AIzaSyCplbng2FwfZgV8HhSk2vot2izlVQ7n_fU"} render={render}>
      <h1>Mapper page</h1>
      <BaseMapContainer />
      </Wrapper>
    </>
  );
};

export default Mapper;
