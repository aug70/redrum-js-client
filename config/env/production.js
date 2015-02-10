/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  port: process.env.PORT || 1337,
  environment: process.env.NODE_ENV || 'development',

  facebookConfig: {
    apiKey: '175967239248590',
    callbackUrl: 'https://redrum-js-client.herokuapp.com/user/facebookcb',
    secretKey: '319c7ed2f24fc1ac61269a319a19fe11'
  },

  githubConfig: {
    apiKey: '9bab472b1f554514792f',
    callbackUrl: 'https://redrum-js-client.herokuapp.com/user/githubcb',
    secretKey: '914b62b2aac9c0506e0146f22bab345ffeb2588c'
  },

  redrumConfig: {
    clientId: 'redrum-js-demo',
    clientSecret: '847eacd8-d636-4aef-845d-512128dd09a4',
    debug: false
  }

};
