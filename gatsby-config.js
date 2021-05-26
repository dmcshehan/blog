module.exports = {
  siteMetadata: {
    title: "Shehan Disanayake",
    author: `Shehan Disanayake`,
    description: `JavaScript and Web Development Tutorials`,
    social: {
      twitter: "@dmcshehan",
    },
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: "gatsby-transformer-remark",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Hind\:300,400,500,600,700`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
