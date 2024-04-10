import Hero from "@/components/hero/Hero";
import Trending from "@/components/trending/Trending";

export default function Home() {
    return (
        <main>
            <Hero />
            <hr className="h-1 rounded-md w-full bg-slate-700 my-4" />
            <Trending />
        </main>
    );
}
