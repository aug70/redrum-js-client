
module.exports = {

	addAlert : function(req, message) {
		var cacheKey = CacheService.makeKey(req, 'user_alerts');
		// console.log('cacheKey ->' + cacheKey);
		var alerts = [];
		if(CacheService.hasKey(cacheKey)) {
			alerts = CacheService.get(cacheKey);
		}
		alerts.push(message);
		CacheService.add(cacheKey, alerts);
	},

	consumeAlert : function(req) {
		var cacheKey = CacheService.makeKey(req, 'user_alerts');
		var alerts = [];
		if(CacheService.hasKey(cacheKey)) {
			alerts = CacheService.get(cacheKey);
			CacheService.remove(cacheKey);
		}
		var result = JSON.parse('{ "alerts" : ' + JSON.stringify(alerts) + ' }');
		//alerts;//{"alerts" : alerts});
		// console.log('alerts ->' + result);
		//JSON.stringify()
		return result;
	}

};