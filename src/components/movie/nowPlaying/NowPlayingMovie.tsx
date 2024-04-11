"use client";

import { FC, useEffect, useState } from "react";
import NowPlayingMovieCard from "@/components/common/card/MovieCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BASE_URL } from "@/constants/apiUrl";

const NowPlayingMovie: FC = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    const fetchNowPlayingMovies = async () => {
        try {
            const response = await fetch(
                `${BASE_URL}/movie/now_playing?language=en-US&page=1&api_key=e561105e6f93ee50d989fc4c6dc71860`
            );
            const data = await response.json();
            setNowPlayingMovies(data.results);
        } catch (error: any) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);

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
        <section className="mt-12">
            <h2 className="pb-6 text-xl font-bold">Now Playing Movies</h2>
            {/* <section className="flex justify-between flex-wrap flex-col gap-x-3 gap-y-6 md:flex-row"> */}
            <Carousel itemClass="px-2" responsive={responsive}>
                {!!nowPlayingMovies &&
                    nowPlayingMovies.map((nowPlayingMovie: any) => {
                        return (
                            <NowPlayingMovieCard
                                key={nowPlayingMovie.id}
                                imgSrc={nowPlayingMovie.poster_path}
                                title={nowPlayingMovie.title}
                                genre_ids={nowPlayingMovie.genre_ids}
                                vote={nowPlayingMovie.vote_average}
                                original_language={
                                    nowPlayingMovie.original_language
                                }
                            />
                        );
                    })}
            </Carousel>
            {/* </section> */}
        </section>
    );
};

export default NowPlayingMovie;
