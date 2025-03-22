import { useEffect, useState } from "react";

import placeholder from "../assets/placeholder.svg";
import "./Card.css";
const Card = () => {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/livros")
      .then((res) => res.json())
      .then((data) => {
        const livrosComImagem = data.map((livro) => ({
          ...livro,
          image: placeholder,
        }));
        setLivros(livrosComImagem);
      });
  }, []);

  return (
    <div className="card-container">
      {livros.map((livro) => (
        <div key={livro.id} className="card">
          <img src={livro.image} alt={`Livro ${livro.id}`} />
          <p>{livro.text}</p>
          <p>R$ {livro.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
