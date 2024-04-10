"use client";

import Hero from "@/components/hero/Hero";
import PopularMovie from "@/components/movie/popular/PopularMovie";
import SearchedMovie from "@/components/movie/searched/SearchedMovie";
import states from "@/states";
import { useSnapshot } from "valtio";

export default function Home() {
    const { searchedMovies } = useSnapshot(states);

    return (
        <main>
            <Hero />
            <hr className="h-1 rounded-md w-full bg-slate-700 my-4" />
            {searchedMovies ? (
                <SearchedMovie searchedMovies={searchedMovies} />
            ) : (
                <PopularMovie />
            )}
        </main>
    );
}
