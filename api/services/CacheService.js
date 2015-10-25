var LRU = require("lru-cache")
  , options = { max: 500
//              , length: function (n) { return n * 2 }
//              , dispose: function (key, n) { n.close() }
              , maxAge: 1000 * 60 * 60 }
  , cache = LRU(options);
var uuid = require('node-uuid');


module.exports = {

	add : function(key, value) {
		cache.set(key, value);
	},

	remove : function(key) {
		cache.del(key);
	},

	hasKey : function(key) {
		return cache.has(key);
	},

	get : function(key) {
		return cache.get(key);
	},

	makeKey : function(req, prefix) {
		if(req && req.session && req.session.username) {
			return prefix + '_' + req.session.username;
		}
		return prefix + '_' + uuid.v1();
	},

	invalidateUserCaches : function(req) {
		CacheService.remove(CacheService.makeKey(req, 'user_summary'));
		CacheService.remove(CacheService.makeKey(req, 'user_dashboard'));
		CacheService.remove(CacheService.makeKey(req, 'user_orders'));
		CacheService.remove(CacheService.makeKey(req, 'user_inventory'));
	}

};