/** @type {import('next').NextConfig} */
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  experimental: {
    //warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
    // next/font not working due to SWC compiler disabled. Opted in. may cause errors?
    forceSwcTransforms: true,
  },
};

export default nextConfig;
