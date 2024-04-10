import { proxy } from "valtio";

const states = proxy({
    searchedMovies: [],
    popularMovies: [],
});

export default states;