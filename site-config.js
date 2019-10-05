const path = require('path');
const theme = require('./src/components/styled/theme');

module.exports = {
  author: `Antonio Ruiz`,
  title: 'Antonio Ruiz WebDev',
  siteTitleShort: `AR`,
  description: `Web portfolio.`,
  siteUrl: `https://antonioruiz.netlify.com`,
  themeColor: theme.turquoise,
  backgroundColor: theme.lightYellow,
  pathPrefix: null,
  logo: path.resolve(__dirname, 'src/images/icon-developer-100.png'),
  social: { twitter: `Anton_Devel` },
};
