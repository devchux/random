import { useEffect } from "react";
import Button from "./component/button";
import { useApp } from "./hooks/useApp";

import "./assets/base.scss";

const App = () => {
  const { onLoad, appRef, numberRef, onClick, random } = useApp();

  useEffect(() => {
    onLoad();
  }, []);
  return (
    <div ref={appRef} className="app">
      <h1 ref={numberRef}>{random}</h1>
      <Button onClick={onClick}>Click</Button>
    </div>
  );
};

export default App;
