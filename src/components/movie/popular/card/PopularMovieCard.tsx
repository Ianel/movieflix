import { movieGenres } from "@/lib/placeholder-data";
import Image from "next/image";
import { FC } from "react";

type Props = {
    imgSrc: string;
    title: string;
    genre_ids: number[];
    vote: number;
    original_language: string;
};

const PopularMovieCard: FC<Props> = ({
    imgSrc,
    title,
    genre_ids,
    original_language,
    vote,
}) => {
    let movieGenre = genre_ids.map((id) => {
        for (const genre of movieGenres.genres) {
            if (genre.id == id) {
                return genre.name;
            }
        }
    });

    return (
        <section className="relative">
            <Image
                src={`http://image.tmdb.org/t/p/w500${imgSrc}`}
                alt={title}
                width={250}
                height={350}
                className="rounded-md sm:w-full"
            />
            <div className="rounded-b-md p-4 absolute bottom-0 left-0 bg-opacity-40 bg-gray-900 backdrop-filter backdrop-blur-sm w-full">
                <h3 className="text-teal-500 font-bold overflow-ellipsis">
                    {title.length > 25 ? `${title.slice(0, 25)}...` : title}
                    {/* {title} */}
                </h3>
                <div className="text-white pb-3 text-sm">
                    {movieGenre
                        .slice(0, 3)
                        .map((genre, index) =>
                            index === movieGenre.slice(0, 3).length - 1 ? (
                                <span key={genre}>{genre}</span>
                            ) : (
                                <span key={genre}>{genre}, </span>
                            )
                        )}
                </div>
                <div className="flex gap-3 items-center">
                    <span className="rounded-lg px-2 bg-green-500">
                        {original_language}
                    </span>
                    <span className="px-2 bg-white rounded-lg">{vote}</span>
                </div>
            </div>
        </section>
    );
};

export default PopularMovieCard;
