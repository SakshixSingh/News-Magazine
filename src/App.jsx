import React, { useState } from "react";
import Navbar from "./componenets/navbar";
import NewsBoard from "./componenets/newsboard";

const App = () => {
  const [category,setCategory] =useState("general");
  return (
    <>
      <Navbar setCategory={setCategory}></Navbar>
      <NewsBoard category={category}></NewsBoard>
    </>
  );
};

export default App;
