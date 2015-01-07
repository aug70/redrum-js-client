
module.exports = {

	addAlert : function(req, message) {
		var cacheKey = CacheService.makeKey(req, 'user_alerts');
		var alerts = [];
		if(CacheService.hasKey(cacheKey)) {
			alerts = CacheService.get(cacheKey);
		}
		alerts.push(message);
		console.log('alerts ->' + alerts);
		CacheService.add(cacheKey, alerts);
	},

	consumeAlert : function(req) {
		var cacheKey = CacheService.makeKey(req, 'user_alerts');
		var alerts = [];
		if(CacheService.hasKey(cacheKey)) {
			alerts = CacheService.get(cacheKey);
			CacheService.remove(cacheKey);
		}
		console.log('alerts ->' + alerts);
		return alerts;
	}

};