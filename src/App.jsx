import React from "react";
import './App.css'
import Page1 from "./pages/Page1";
import Header from "./components/Header";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
const App = () => {
  
  return (
    <div id="main">
    <Header/>
    <Page1/>
    <Page2/>
    <Page3/>
    </div>
  );
};

export default App;
