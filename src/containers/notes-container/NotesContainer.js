import React from "react";
import PostItForm from "../../components/post-it-form/PostItForm";
import PostItList from "../../components/post-it-list/PostItList"

const NotesContainer = ({ position }) => {


  console.log(position)

  return (
    <>
      <PostItForm position={position} />
      <PostItList />
    </>
  );
};
// position={props.position} 

export default NotesContainer;
