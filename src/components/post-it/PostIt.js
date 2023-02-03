import React from "react";
import { connect } from "react-redux";
import { deleteNote } from "../../redux/notes/noteActions";
import { Icon } from "semantic-ui-react";

const PostIt = ({ note, idx, deleteNote }) => {
  return (
    <li>
      {note}
      <Icon name="trash alternate" onClick={() => deleteNote(idx)} />
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteNote: (key) => dispatch(deleteNote(key)),
});

export default connect(null, mapDispatchToProps)(PostIt);
