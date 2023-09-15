import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({ name, username, id }) => {
  const { dispatch } = useContext(ContextGlobal);
  const { pathname } = useLocation();

  const addFav = ()=>{
    dispatch({type: 'add_favorite', data: {
      id,
      name,
      username,
    }})
    alert(`Se ha agregado el dentista "${id} - ${name}" a favoritos.`);
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <small>{id}</small>
      <Link to={`/dentist/${id}`}>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <img src={require("../assets/images/doctor.jpg")} alt="Doctor" width={200} />
      </Link>

      <p><strong>{name}</strong></p>
      
      <p>{username}</p>

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {pathname !== '/favs' && (
        <button onClick={addFav} className="favButton">Add fav</button>
      )}
    </div>
  );
};

export default Card;
