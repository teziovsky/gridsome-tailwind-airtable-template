# Hey it's gridsome-tailwind-airtable-template! 🤝

> A Gridsome with Tailwind CSS and Airtable as CMS starter template.

## Run locally

Create the project from this template

```bash
gridsome create your_app_name https://github.com/teziovsky/gridsome-tailwind-airtable-template.git
```

Go to the project directory

```bash
cd your_app_name
```

Start the development server

```bash
gridsome develop
```

## Configure your Airtable connection for your first table

Inside your `gridsome.config.js` file, you'll see the following:

```javascript
// gridsome.config.js //
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
};

```

- `apiKey` is the API key from Airtable
- `baseId` is the identifier for the base you would like to connect to
- `typeName` is what you would like to call your data in GraphQL

**Note:** In order for your templates to generate properly at the specified route a `typeName.vue` file must exist
in `\templates`.

### dotenv file

You'll need to create the file `.env` in your root project directory (The same level as `gridsome.config.js`) with the
following (replace with your values):

```dotenv
AIRTABLE_KEY=<apiKey>
AIRTABLE_BASE=<baseId>
```

## Contact

If you have any suggestions, please [send me an email here](mailto:kontakt@jakubsoboczynski.pl) 🔥

## Inspiration

Based on [terabytetiger gridsome template](https://github.com/terabytetiger/gridsome-airtable-starter)
