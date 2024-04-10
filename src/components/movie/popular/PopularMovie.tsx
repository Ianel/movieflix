import { FC } from "react";
import { popularMovies } from "@/lib/placeholder-data";
import PopularMovieCard from "@/components/movie/popular/card/PopularMovieCard";

const PopularMovie: FC = () => {
    return (
        <section>
            <h2 className="pb-6 text-xl font-bold">Popular Movies</h2>
            <section className="flex justify-between flex-wrap flex-col gap-3 md:flex-row">
                {popularMovies.results.slice(0, 20).map((popularMovie) => {
                    return (
                        <PopularMovieCard
                            key={popularMovie.id}
                            imgSrc={popularMovie.poster_path}
                            title={popularMovie.title}
                            genre_ids={popularMovie.genre_ids}
                            vote={popularMovie.vote_average}
                            original_language={popularMovie.original_language}
                        />
                    );
                })}
            </section>
        </section>
    );
};

export default PopularMovie;
