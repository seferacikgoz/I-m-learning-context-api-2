import { useEffect, useState } from "react";
import { MainContext } from "./context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./style.css"

function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.body.className = theme
  },[theme])

  const data = {
    theme,
    setTheme
  }

  return (
    <MainContext.Provider value={data}>
      <Header />
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
