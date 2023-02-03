import React from "react";
import { connect } from "react-redux";
import PostIt from "../post-it/PostIt";

const PostItList = ({ notes }) => {
  const renderNotes = () => {
    return notes.notes.map((note, i) => (
      <PostIt key={note.id} note={note} idx={i} />
    ));
  };

  return <div>{renderNotes()}</div>;
};

const mapStateToProps = ({ notes }) => ({
  notes,
});

export default connect(mapStateToProps)(PostItList);
