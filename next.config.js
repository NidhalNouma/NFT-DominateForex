const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/NFT-DominateForex" : "",
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
};
