import React from "react";

import {
  About,
  Footer,
  Blog,
  Commingsoon,
  Services,
  Header,
} from "./containers";
import { Membership, Workingwith, Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Workingwith />
      <About />
      <Services />
      <Commingsoon />
      <Membership />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
