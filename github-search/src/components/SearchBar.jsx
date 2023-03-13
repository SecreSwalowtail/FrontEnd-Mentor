function SearchBar(props) {
    const barColor = props.theme === 'white' ? '#FEFEFE' : '#1E2A47'
    const shadow = props.theme === 'white' ? '0px 16px 30px -10px rgba(70,95,187,0.25)' : 'none'
    const inputText = props.theme === 'white' ? '#4B6A9B' : 'white'


    return(
        <div className="search-bar" style={{backgroundColor: barColor, boxShadow: shadow}}>
            <img src="../src/assets/mag-glass.svg" className="search-image"/>
            <input className="search-input" style={{color: inputText}} onChange={props.updateName}/>
            <p className="search-error">
                No Results
            </p>
            <button className="search-button" onClick={props.handleData}>
                Search
            </button>
        </div>
    )
}

export default SearchBar