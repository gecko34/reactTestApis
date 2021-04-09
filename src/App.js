import React from "react";
import Header from "./components/Header";
import Content from "./components/content/Content";
import Footer from "./components/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
