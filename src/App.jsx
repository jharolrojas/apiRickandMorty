import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import { useState } from "react";
import ResidentList from "./components/ResidentList";
import useGetData from "./customHooks/useGetData";
import CountPoblation from "./components/CountPoblation";

function App() {
  const [search, setSearch] = useState("");
  const { location, inputId } = useGetData();

  return (
    <div className="App">
      <Header />
      <div className="containerInputId">
        <input
          className="inputId"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={() => inputId(search)}
        />
        <button onClick={() => inputId(search)} className="button">
          <i className="fas fa-search-location icon"></i>
        </button>
      </div>
      <Location location={location} />
      <CountPoblation location={location}/>
      <ResidentList location={location} />
      <useGetData search={search} />
    </div>
  );
}

export default App;
