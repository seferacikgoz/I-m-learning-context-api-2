function Footer  ({theme, setTheme})  {

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }



  return (
    <div>
        footer component <br/>
        <button onClick={switchTheme}>Switch theme</button>
    </div>
  )
}

export default Footer