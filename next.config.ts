import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // YouTube-supplied video thumbnails for Bench cards (hard rule 13)
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        // /index has no route of its own; canonical is the root. 308 so search engines drop it.
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        // Rate calculator withdrawn 23 Sep 2026; send any old links home.
        source: "/tools/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        // Tracked advertiser links: thefurnituremagazine.com/go/<slug> -> Supabase edge function (logs the click, 302s on)
        source: "/go/:slug",
        destination: "https://ibysduxeugayotndbzaw.supabase.co/functions/v1/tfm-go/:slug",
      },
    ];
  },
};

export default nextConfig;
