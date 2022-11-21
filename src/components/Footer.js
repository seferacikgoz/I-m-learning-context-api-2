import ThemeSwitcher from "./ThemeSwitcher"
import {MainContext, useContext} from "../context"

function Footer  ()  {

    const {setLogoText} = useContext(MainContext)

    const switchLogoText = () => {
        setLogoText("Prototurk.com")
    }
   
  return (
    <div>
        footer component <br/>
        <ThemeSwitcher />
       <button onClick={switchLogoText}>Switch Logo Text</button>
    </div>
  )
}

export default Footer