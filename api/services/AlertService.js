
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
		
		var alerts = [];
		var cacheKey = CacheService.makeKey(req, 'user_alerts');
		if(CacheService.hasKey(cacheKey)) {
			alerts = CacheService.get(cacheKey);
			CacheService.remove(cacheKey);
		}
		if(alerts.length===0) {
			return alerts;
		}

		var result = [];
		for(var i=0; i<alerts.length; i++) {
			var item = {
				"message" : alerts[i]
			}
			// console.log('item' + item);
			result.push(item);
		}
		return result;
	}

};