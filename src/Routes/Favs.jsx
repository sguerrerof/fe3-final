import React, { useEffect, useState } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Favs = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem('favs');
    if (data) {
      setFavs(JSON.parse(data));
    }
  }, []);

  return (
    <main>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length === 0 && (
          <h3>No hay favoritos, agrega uno.</h3>
        )}
        {favs.map((fav) => (
          <Card
            name={fav.name}
            id={fav.id}
            username={fav.username}
            key={fav.id}
          />))}
      </div>
    </main>
  );
};

export default Favs;
