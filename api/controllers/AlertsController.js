module.exports = {
	
	alerts : function(req, res) {
		var alerts = AlertService.consumeAlert(req);
		//console.log(alerts);
		res.send(alerts);
	}

};
