import React from "react";
import Buttons from "./Buttons";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import './App.css'

const App = () => {
  return (
    <div className="container">
      <SearchForm />
      <Buttons />
      <Stories />
    </div>
  );
};

export default App;
