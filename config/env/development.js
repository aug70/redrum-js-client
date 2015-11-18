/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/

  // models: {
  //   connection: 'someMongodbServer'
  // }

  facebookConfig: {
  	apiKey: '602313753122623',
  	callbackUrl: 'http://localhost:1337/user/facebookcb',
  	secretKey: 'd346dbac832fcfef953fb4621fd9d889'
  },

  githubConfig: {
    apiKey: '3d81baa79a129f886ba7',
    callbackUrl: 'http://localhost:1337/user/githubcb',
    secretKey: '49b11ee5dceedc41ae7f7069980f2849680fd415'
  },

  redrumConfig: {
    //host : ['localhost'],
    //port : 8443,
    clientId: 'redrum-js-demo',
    clientSecret: '847eacd8-d636-4aef-845d-512128dd09a4',
    debug: false,
    trace: false
  }
};
