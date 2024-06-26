import React, { useState } from 'react';

function Header() {
  const allowedWords = ["house", "garden", "cars", "construction", "tech", "sport", "weddings", "cleaning"];
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchValue(inputValue);
    if (inputValue.length > 0) {
      const matchingSuggestions = allowedWords.filter(word =>
        word.startsWith(inputValue)
      );
      setSuggestions(matchingSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion);
    setSuggestions([]);
  };

  const handleSubmit = () => {
    const searchTerm = searchValue.toLowerCase();
    if (allowedWords.includes(searchTerm)) {
        window.location.href = `/${searchTerm}`;
    } else {
      alert("Please enter a valid search term."); // Alert user if the entered word is not in the allowed list
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <header style={{ 
      position: 'fixed', 
      top: '0', 
      left: '0', 
      width: '100%', 
      backgroundColor: '#000000', // Changed background color to black
      color: '#ffffff', // Changed text color to white
      display: 'flex', // Use flexbox for layout
      alignItems: 'center', // Align items vertically in the center
      justifyContent: 'space-between', // Space out items horizontally
      padding: '10px', 
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <a href='./' style={{textDecoration: 'none', color: 'white'}}><h1 className="grey-shadow" style={{ margin: 0, fontSize: 24, marginLeft: 100 }}>ForWorker.</h1></a>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1', marginRight: '50px' }}> {/* Centered Search Bar */}
        <input 
          type="text" 
          list="suggestions" 
          placeholder="Search..." 
          value={searchValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          style={{ 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid #ccc', 
            width: '300px', 
            textAlign: 'left'
          }} 
        />
        <datalist id="suggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} onClick={() => handleSuggestionClick(suggestion)} />
          ))}
        </datalist>
        <button 
          type="button" 
          onClick={handleSubmit} 
          style={{ 
            marginLeft: '10px', 
            padding: '8px 16px', 
            borderRadius: '4px', 
            backgroundColor: 'burlywood', 
            color: 'black', 
            border: 'none' 
          }}
        >
          Search
        </button>
      </div>
      <a href="./Login" style={{ textDecoration: 'none', fontSize: '16px', marginRight: '100px' , color:'burlywood'}}>Worker?</a>
    </header>
  );
}

export default Header;
