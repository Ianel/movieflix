import { FC } from "react";

const Search: FC = () => {
    return (
        <section className="w-full flex flex-col md:flex-row gap-4 items-center">
            <input
                className="w-full px-4 py-2 rounded-md"
                type="search"
                placeholder="Enter the title of a movie"
            />
            <button className="w-full md:w-48 bg-teal-700 text-white px-4 py-2 rounded-md">
                Search
            </button>
        </section>
    );
};

export default Search;
