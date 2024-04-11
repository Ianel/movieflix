"use client";

import { searchMovie } from "@/lib/actions";
import states from "@/states";
import { FC } from "react";
import { useFormState } from "react-dom";

const Search: FC = () => {
    const [state, dispatch] = useFormState(searchMovie, "");
    states.searchedMovies = state;

    return (
        <form
            action={dispatch}
            className="w-full flex flex-col md:flex-row gap-4 items-center"
        >
            <input
                className="w-full px-4 py-2 rounded-md"
                type="search"
                placeholder="Enter the title of a movie"
                name="searchQuery"
                required
            />
            <button className="w-full md:w-48 bg-teal-700 text-white px-4 py-2 rounded-md">
                Search
            </button>
            {state.errors?.searchQuery &&
                state.errors?.searchQuery.map((error: any) => {
                    return <p key={error}>{error}</p>;
                })}
        </form>
    );
};

export default Search;
