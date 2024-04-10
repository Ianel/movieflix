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
        ],
    },
};

export default nextConfig;
