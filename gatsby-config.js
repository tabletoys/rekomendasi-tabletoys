module.exports = {
  siteMetadata: {
    title: `Rekomendasi Tabletoys`,
    description: `Berbagai board game pilihan dari tabletoys jika anda bingung dalam memilih game yang diinginkan.`,
    author: `@Tabletoys`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@chakra-ui/gatsby-plugin`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-google-spreadsheets',
      options: {
        spreadsheetId: '16SFkx6ih5m8dKhkycbywnk7WWrZSxV8v7GFKXs-5GQk',
        //apiKey: 'GOOGLE-API-KEY'
        // Or
        credentials: require('./sheet-reader.json')
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
