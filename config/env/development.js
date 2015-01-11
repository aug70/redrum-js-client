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
  	apiKey: '175967239248590',
  	callbackUrl: 'http://localhost:1337/user/facebookcb',
  	secretKey: '319c7ed2f24fc1ac61269a319a19fe11'
  },

  redrumConfig: {
    clientId: 'redrum-php-demo',
    clientSecret: '847e8568-d636-4aef-8d8d-5d6628ddcbbb',
    debug: false
  }
};
