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
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`,
            variants: [`400`, `bold 700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `bold 700`],
          },
          {
            family: `Nanum Gothic`,
            variants: [`400`, `bold 700`],
          },
          {
            family: `Libre Franklin`,
            variants: [`400`, `bold 700`],
          },
          {
            family: `Abel`,
            variants: [`400`, `bold 700`],
          },
          {
            family: `Questrial`,
            variants: [`400`, `bold 700`],
          },
          {
            family: `Cairo`,
            variants: [`400`, `bold 700`],
          },
        ],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
