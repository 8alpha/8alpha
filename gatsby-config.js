const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: "8Alpha Partners",
    subtitle: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: path.join(__dirname, `src`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: path.join(__dirname, `src`, `resources`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Questrial`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139212708-1",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
