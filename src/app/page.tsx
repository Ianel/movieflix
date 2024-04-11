"use client";

import Hero from "@/components/hero/Hero";
import NowPlayingMovie from "@/components/movie/nowPlaying/NowPlayingMovie";
import PopularMovie from "@/components/movie/popular/PopularMovie";
import SearchedMovie from "@/components/movie/searched/SearchedMovie";
import TopRatedMovie from "@/components/movie/topRated/TopRatedMovie";
import UpcomingMovie from "@/components/movie/upcoming/UpcomingMovie";
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
                <>
                    <PopularMovie />
                    <TopRatedMovie />
                    <UpcomingMovie />
                    <NowPlayingMovie />
                </>
            )}
        </main>
    );
}
