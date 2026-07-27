import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // The legal pages moved to clean URLs (the app links to them, and
  // /page-* read poorly in store listings). Old links keep working.
  async redirects() {
    return [
      { source: "/page-privacy", destination: "/privacy", permanent: true },
      { source: "/page-terms", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
