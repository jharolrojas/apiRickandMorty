import "./App.css";
import Header from "./components/Header";
import Location from "./components/Location";
import { useState } from "react";
import ResidentList from "./components/ResidentList";
import useGetData from "./customHooks/useGetData";

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
        />
        <button onClick={() => inputId(search)} className="button">
          <i class="fas fa-search-location"></i>
        </button>
      </div>
      <Location location={location} />
      <ResidentList location={location} />
      <useGetData search={search} />
    </div>
  );
}

export default App;
