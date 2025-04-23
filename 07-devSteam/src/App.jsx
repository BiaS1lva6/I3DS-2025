import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Promotion from "./components/Promotion";

function App() {
  const [contador, setContdor] = useState(0);

  const hadleAddCarinho = () => {
    setContdor(contador + 1); 
  }

  return (
    <>
      <Header contadorJogos={contador} />
      <Promotion onAddCarinho={hadleAddCarinho}/> 
    </>
  );
}

export default App;