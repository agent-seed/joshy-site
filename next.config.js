/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    plugins: [
      nextui({
        themes: {
          light: {
            // ...
            colors: {},
          },
          dark: {
            // ...
            colors: {
                primary: 'ff5757'
            },
          },
          // ... custom themes
        },
      }),
    ],
  };