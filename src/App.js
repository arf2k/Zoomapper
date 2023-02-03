import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Mapper from "../src/pages/Mapper";
import Header from "./components/header/Header";
import PostItForm from "../src/components/post-it-form/PostItForm"
import NotesContainer from "../src/containers/notes-container/NotesContainer";

const App = () => {

  return (
    <>
    <h1>APPPPPPP</h1>
    {/* <Router>
      <Route exact path="/" element={<Homepage/>}/>
    </Router> */}
      {/* <Header />
      <Router>
        <Routes>       
           <Route exact path="/" element={<Homepage/>} />
        <Route
          exact
          path="/mapper"
          element={<Mapper/>}
        />
        <Route exact path="/postitform" element={<PostItForm/>} />
        <Route exact path="/notescontainer" element={<NotesContainer/>}/>
        </Routes>

      </Router> */}
      <Mapper/>
    </>
  );
};

export default App;
