import { useState } from 'react';
import './App.css'; 
import { Data } from './data.js';

function App() {

  const [query, setQuery] = useState("");

  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span>
      ) : (
        part
      )
    );
  };
  
  return (
    <div className="App">
      <h1>Search</h1>
      <div className="search-container">
      <input type="text" placeholder="Search" className='search' onChange={e=>setQuery(e.target.value)}/>
      <div className="ad-box">
        <a href="https://www.tesla.com/model3" target="_blank" rel="noopener noreferrer"><img src="logot.jpg" alt="Advertisement"/></a>
        </div>
      </div>
      <ul className="list">
        {Data.filter(data=>data.title.toLowerCase().includes(query.toLowerCase()) || data.script.toLowerCase().includes(query.toLowerCase())).map((data) =>(
            <li key ={data.date} className="listItem">
            <div className="title">{highlightText(data.title, query)}</div>
            <div><i>{data.date}</i></div><br/>
            <div>{highlightText(data.script, query)}</div><br/></li>
            
            
        ))}
      </ul>
      
       </div>
  );
}



export default App;
