/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    reactStrictMode: false,
    swcMinify: true,
    redirects: async() => {
        return [{
            source: "/settings",
            destination: "/settings/project",
            permanent: true,
        }, ];
    },
};

module.exports = nextConfig;