import { useEffect, useState } from "react";
import "./Card.css";

const Card = () => {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/livros")
      .then((res) => res.json())
      .then((data) => {
        setLivros(data);
      });
  }, []);

  return (
    <div className="card-container">
      {livros.map((livro) => (
        <div key={livro.id} className="card">
          <img src={livro.imagem} alt={`Livro ${livro.text}`} />
          <p>{livro.text}</p>
          <p>R$ {livro.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
