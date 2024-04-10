import Hero from "@/components/hero/Hero";
import PopularMovie from "@/components/movie/popular/PopularMovie";

export default function Home() {
    return (
        <main>
            <Hero />
            <hr className="h-1 rounded-md w-full bg-slate-700 my-4" />
            <PopularMovie />
        </main>
    );
}
