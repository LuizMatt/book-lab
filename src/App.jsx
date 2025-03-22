import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import { useState } from "react";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <>
      <div>
        <Navbar />
        <Slider />
        <h2>Destaques</h2>
        <Card />
        <h2>Novidades!</h2>
        <Card />
      </div>
    </>
  );
}

export default App;
