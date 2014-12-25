var LRU = require("lru-cache")
  , options = { max: 500
              , length: function (n) { return n * 2 }
              , dispose: function (key, n) { n.close() }
              , maxAge: 1000 * 60 * 60 }
  , cache = LRU(options);


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
	}

};