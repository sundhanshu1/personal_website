import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Services  from "./components/Footer";
import Expertise from "./components/Expertise";
import End from "./components/End";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
      <About />
      <Services />
      <Expertise />
      <End />

    </>
  );
}

export default App;
