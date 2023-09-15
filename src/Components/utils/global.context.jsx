import { createContext, useEffect, useReducer } from "react";

export const initialState = { theme: "light", data: [] }

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_theme':
      return {
        ...state,
        theme: action.theme,
      }

    case 'get_dentist':
      return {
        ...state,
        data: action.data,
      }

    case 'add_favorite':
      const favs = localStorage.getItem('favs');
      if (favs) {
        const data = JSON.parse(favs);
        if (!data.find(({ id }) => id === action.data.id)) {
          data.push(action.data);
          localStorage.setItem('favs', JSON.stringify([...data]));
        }
      } else {
        localStorage.setItem('favs', JSON.stringify([action.data]))
      }
      return state;
      
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'get_dentist', data: data })
    }
    getData();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
