import Theme from './Theme'

function ThemeBar(props) {
    const themeCol = props.theme === 'white' ? '#222731' : 'white'

    return (
        <header className='top-bar'>
            <h1 className='top-title' style={{color: themeCol}}>
                devfinder
            </h1>
            <Theme handleTheme={props.handleTheme} theme={props.theme}/>
        </header>
    )
}

export default ThemeBar