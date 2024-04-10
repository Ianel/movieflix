import { FC } from "react";
import Search from "@/components/hero/search/Search";
import Link from "next/link";

const Hero: FC = () => {
    return (
        <header className="bg-hero bg-cover p-6 rounded-md h-[350px] md:h-[260px] flex flex-col justify-between items-start">
            <Link href="/">
                <h1 className="text-2xl text-white font-bold">Movie Flix</h1>
            </Link>
            <p className="text-white">
                Find the latest realeases, the trendings and the upcomings tv
                shows and movies with MovieFlix. Every details is at your
                disposal. Enjoy !
            </p>
            <Search />
        </header>
    );
};

export default Hero;
