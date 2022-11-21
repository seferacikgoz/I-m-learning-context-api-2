import ThemeSwitcher from "./ThemeSwitcher"

function Footer  ({theme, setTheme})  {

   
  return (
    <div>
        footer component <br/>
        <ThemeSwitcher theme={theme} setTheme={setTheme}/>
       
    </div>
  )
}

export default Footer