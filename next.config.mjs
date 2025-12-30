import withNextIntl from "next-intl/plugin";

const nextIntlConfig = withNextIntl("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextIntlConfig(nextConfig);
