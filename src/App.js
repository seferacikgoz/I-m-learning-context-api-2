import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const [theme, setTheme] = useState('light')

  return (
    <div>
      <Header theme={theme}/>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  );
}

export default App;
