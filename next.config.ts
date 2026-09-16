import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
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
