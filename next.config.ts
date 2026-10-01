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
      // Retired desk-written articles (#131, 1 Oct 2026). Keep in step with RETIRED in data/articles.ts.
      { source: "/articles/uk-furniture-skills-crisis-2026", destination: "/articles/uk-upholstery-workforce-ons-2026", permanent: true },
      { source: "/articles/deep-buttoning-technique-guide", destination: "/bench", permanent: true },
      { source: "/articles/pricing-guide-self-employed-upholsterers", destination: "/articles/upholsterers-pricing-guide-valerie-hayes", permanent: true },
      { source: "/articles/uk-foam-material-costs-2026", destination: "/section/the-trade", permanent: true },
      { source: "/articles/finding-clients-self-employed-upholsterer", destination: "/articles/upholsterers-pricing-guide-valerie-hayes", permanent: true },
      { source: "/articles/leather-colour-matching-guide", destination: "/bench", permanent: true },
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
