import { useEffect } from "react";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  });
  return (
    <>
      <Home />
    </>
  );
}

export default App;
