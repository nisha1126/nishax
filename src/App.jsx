import{ useState } from "react";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  console.log(results,"results");

  return <>
  <h1> Welcome to skywaves  </h1>
  <div className="container">
  <input type="text" placeholder="Enter to Search" 
  value={search}
  onChange={(e)=> setSearch(e.target.value)}/>

  <button 
  onClick={()=>{
    fetch("/api/search?text="+ search)
    .then((response) => {
      response.json()
      .then((results) => setResults(results))
      .catch((error) => console.error("Search error !!", error));
    })
    .catch((error) => console.error("Search error !!", error));
  }
}
  >Search</button>
  </div>
  <div className="results"> 
  <ul>
    {
      results.map((item,index) => (
        <li key={index}>
          <a href={item.url} target="_blank">{item.title}{item.url}</a>
        </li>
      ))
    }
  </ul>
    </div>
  </>;
}

export default App;