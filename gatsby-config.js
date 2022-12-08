const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        //printRejected: true, // Print removed selectors and processed file names
        tailwind: true, // Enable tailwindcss support
        // develop: true, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host:
          process.env.NODE_ENV === 'development' ? 'preview.contentful.com' : 'cdn.contentful.com',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-disqus',
      options: {
        shortname: 'hof-1',
      },
    },
  ],
}
