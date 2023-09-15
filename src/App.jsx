
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
import { useContext, useEffect } from "react";
import { ContextGlobal } from "./Components/utils/global.context";


function App() {
  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    document.documentElement.className = state.theme;
  }, [state.theme]);

  return (
      <div className="App">
          <Navbar/>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/dentist/:id" element={<Detail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/favs" element={<Favs />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          <Footer/>
      </div>
  );
}

export default App;
