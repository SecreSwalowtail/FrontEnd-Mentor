
function Theme(props) {
  const titleColor = props.theme === 'white' ? '#4B6A9B' : 'white'
  const srcImage = props.theme === 'white' ? 'src/assets/moon.svg' : 'src/assets/sun.svg'

  return (
    <div className='theme-switcher' role={'button'} onClick={props.handleTheme}>
      <p className='theme-title' style={{ color: titleColor}}>
        {props.theme === 'white' ? 'DARK' : "LIGHT"}
      </p>
      <img className='theme-image' src={srcImage}/>  
    </div>
  )
}

export default Theme
