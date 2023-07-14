import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Works from "./components/Works";
import { appContainerClass } from "./utils/classes";

import "../index.css";

function App() {
  return (
    <div className={appContainerClass()}>
      <Hero />
      <About />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
