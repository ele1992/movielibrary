import { useState } from "react";
import axios from "axios";
import MovieDisplay from "./MovieDisplay";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState(" ");
  const [state, set_State] = useState({ status: "idle" });

  const search = async (evt) => {
    evt.preventDefault();
    const queryParam = encodeURIComponent(searchText);

    if (searchText === "") {
      set_State({ status: "idle" });
      return;
    }

    set_State({ status: "searching" });
    console.log("Start searching for:", searchText);
    const data = await axios(
      `https://omdbapi.com/?apikey=8f9f41ed&s=${queryParam}`
    );
    console.log(data.data.Search);
    set_State({ status: "done", data: data.data.Search });
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <form>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <input type="submit" onClick={search} value="Search" />
      </form>
      {state.status === "idle" && <p>idle</p>}
      {state.status === "searching" && <p>searching...</p>}
      {state.status === "done" && (
        <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
          {state.data === undefined ? (
            <h2>no movies found</h2>
          ) : (
            state.data.map((movie) => <MovieDisplay props={movie} />)
          )}
        </div>
      )}
    </div>
  );
}
