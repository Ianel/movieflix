import { FC } from "react";
import SearchedMovieCard from "@/components/common/card/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SearchedMovie: FC<{ searchedMovies: any }> = ({ searchedMovies }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1365 },
            items: 5,
            partialVisibilityGutter: 100,
            slidesToSlide: 5,
        },
        mediumDesktop: {
            breakpoint: { max: 1365, min: 1279 },
            items: 4,
            partialVisibilityGutter: 80,
            slidesToSlide: 4,
        },
        smallDesktop: {
            breakpoint: { max: 1279, min: 1023 },
            items: 3,
            partialVisibilityGutter: 60,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
            partialVisibilityGutter: 50,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30,
        },
    };

    return (
        <section>
            <h2 className="pb-6 text-xl font-bold">Searched Movies</h2>
            {/* <section className="flex justify-between flex-wrap flex-col gap-x-3 gap-y-6 md:flex-row"> */}

            <Carousel itemClass="px-2" responsive={responsive}>
                {!!searchedMovies &&
                    searchedMovies.map((searchedMovie: any) => {
                        return (
                            <SearchedMovieCard
                                key={searchedMovie.id}
                                imgSrc={searchedMovie.poster_path}
                                title={searchedMovie.title}
                                genre_ids={searchedMovie.genre_ids}
                                vote={searchedMovie.vote_average}
                                original_language={
                                    searchedMovie.original_language
                                }
                            />
                        );
                    })}
            </Carousel>

            {/* </section> */}
        </section>
    );
};

export default SearchedMovie;
