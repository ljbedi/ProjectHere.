const dotenv = require('dotenv');

dotenv.config();

module.exports = function ({ config }) {
  return {
    ...config,
    slug: 'projectHere',
    name: 'projectHere',
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.codeclan.projectHere',
      config: {
        googleMapsApiKey: process.env.GOOGLE_CLOUD_API_KEY,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.codeclan.projectHere',
      config: {
        googleMaps: {
          apiKey: process.env.GOOGLE_CLOUD_API_KEY,
        },
      },
    },
  };
};

