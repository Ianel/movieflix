/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                port: "",
                hostname: "image.tmdb.org",
                pathname: "/t/p/w500/**",
            },
            {
                protocol: "https",
                port: "",
                hostname: "picsum.photos",
                pathname: "/200/300",
            },
        ],
    },
};

export default nextConfig;
