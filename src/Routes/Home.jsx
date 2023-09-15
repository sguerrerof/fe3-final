import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <main>
      <h1>Dentists</h1>
      <div className='card-grid'>
        {state.data.map((dentist) => (
          <Card
            name={dentist.name}
            id={dentist.id}
            username={dentist.username}
            key={dentist.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home