// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const postcssPlugins = [tailwind()];

module.exports = {
  siteName: 'Airtable TailwindCSS Starter',
  plugins: [
    {
      use: '@gridsome/source-airtable',
      options: {
        // Add these to a .env file
        // Details on finding these values can be found at:
        // https://gridsome.org/plugins/@gridsome/source-airtable
        apiKey: process.env.AIRTABLE_KEY, //required
        baseId: process.env.AIRTABLE_BASE, //required
        tables: [
          {
            name: 'table_name',
            typeName: 'table_name', //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
        ],
      },
    },
  ],
  templates: {
    table_name: '/table_name/:id', //optional
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
