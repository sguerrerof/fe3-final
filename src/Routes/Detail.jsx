import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState();

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    const getDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist({
        name: data.name,
        email: data.email,
        phone: data.phone,
        website: data.website,
      });
    }
    getDentist();
  }, [id]);

  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      {dentist && (
        <table>
          <thead>
            <tr>
              <th><strong>Name</strong></th>
              <th><strong>Email</strong></th>
              <th><strong>Phone</strong></th>
              <th><strong>Website</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentist.name}</td>
              <td>{dentist.email}</td>
              <td>{dentist.phone}</td>
              <td>{dentist.website}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  )
}

export default Detail