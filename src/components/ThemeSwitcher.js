function ThemeSwitcher  ({theme, setTheme}) {

    const switchTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
  return (
    <button onClick={switchTheme}>Switch theme</button>
  )
}

export default ThemeSwitcher
