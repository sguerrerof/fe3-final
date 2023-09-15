import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const handlerChangeTheme = () => {
    if (state.theme === 'light') {
      dispatch({ type: 'change_theme', theme: 'dark'})
    } else {
      dispatch({ type: 'change_theme', theme: 'light'})
    }
  }

  return (
    <nav>
      <h1><span>Mock</span><span>Hospital</span></h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/favs">Favs</NavLink>
      <button className="change-theme" onClick={handlerChangeTheme}>Theme <strong>{state.theme}</strong></button>
    </nav>
  )
}

export default Navbar