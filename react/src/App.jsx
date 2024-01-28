import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [selected, setSelected] = useState([]);

  const fetchData = async () => {
    if (!searchTerm.length) return;

    const res = await fetch(
      `https://dummyjson.com/users/search?q=${searchTerm}`
    );
    const data = await res.json();
    setSuggestions(data.users);
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const handleClick = (data) => {
    setSelected((prev) => [...prev, data]);
  };

  return (
    <div className="container">
      <div className="user-input">
        {selected.map((el) => (
          <div className="pill">
            <img src={el.image} alt={el.firstName} />
            <span>{el.firstName}</span>
          </div>
        ))}

        <div className="box">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter user name"
          />
          <ul className="sugg">
            {suggestion.map((el) => (
              <li onClick={() => handleClick(el)}>
                <img src={el.image} alt={el.firstName} />
                <span>
                  {el.firstName} {el.lastName}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
