import Theme from './components/Theme'
import { useState } from 'react'
import { useEffect } from 'react'
import ThemeBar from './components/ThemeBar'
import Search from './components/Search'

function App() {
    const [theme, setTheme] = useState(null)


    //Set theme based on device theme
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const initialTheme = darkModeMediaQuery.matches ? 'dark' : 'white';
        setTheme(initialTheme);
        updateBodyBackground(initialTheme);
    
        const handleChange = (e) => {
            const theme = e.matches ? 'dark' : 'white';
            setTheme(theme);
            updateBodyBackground(theme);
        };
        darkModeMediaQuery.addEventListener('change', handleChange);
    
        return () => {
            darkModeMediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    function updateBodyBackground(theme) {
        document.body.style.backgroundColor = theme === 'dark' ? '#141D2F' : '#F6F8FF';
    }

    const handleTheme = () => {
        if (theme === 'white') {
        setTheme('dark')
        document.body.style = 'background: #141D2F'
        } else {
        setTheme('white')
        document.body.style = 'background: #F6F8FF'
        }
    }

    return (
        <div className='app'>
            <ThemeBar theme={theme} handleTheme={handleTheme}/>
            <Search theme={theme}/>
        </div>
    )
}

export default App