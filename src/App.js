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

  return (
    <MainContext.Provider value={data}>
      <Header theme={theme}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </MainContext.Provider>
  );
}

export default App;
