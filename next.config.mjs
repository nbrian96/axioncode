/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Permite generar un sitio estático
    productionBrowserSourceMaps: true,
    distDir: process.env.DIST_DIR || '.next',  typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: {
      unoptimized: true, // Deshabilita la optimización de imágenes para exportación estática
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'images.pixabay.com',
        },
      ],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/homepage',
          permanent: false,
        },
      ];
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: '@dhiwise/component-tagger/nextLoader',
        }],
      });
      return config;
    },
  };
  
  export default nextConfig;
  