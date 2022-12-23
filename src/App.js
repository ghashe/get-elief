import React from "react";

import {
  Aboutus,
  Footer,
  Blog,
  Commingsoon,
  Profile,
  Header,
} from "./containers";
import { Membership, Workingwith, Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>

      <Workingwith />
      <Aboutus />
      <Profile />
      <Commingsoon />
      <Membership />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
