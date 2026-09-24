import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      {
        source: "/data-deletion",
        destination: "/account-deletion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
