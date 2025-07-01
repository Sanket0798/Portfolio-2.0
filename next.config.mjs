// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//         domains: ['assets.aceternity.com'],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "source.unsplash.com",
//       },
//     ],
//   },
//   webpack(config, { isServer }) {
//     config.module.rules.push({
//       test: /\.glb$/,
//       use: [
//         {
//           loader: 'file-loader',
//           options: {
//             publicPath: '/_next/static/assets/',
//             outputPath: 'static/assets/',
//             name: '[name].[hash].[ext]',
//             esModule: false,
//           },
//         },
//       ],
//     });

//     return config;
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        pathname: "/**", // allow all paths
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**", // allow all paths
      },
    ],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.glb$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/assets/",
            outputPath: "static/assets/",
            name: "[name].[hash].[ext]",
            esModule: false,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
