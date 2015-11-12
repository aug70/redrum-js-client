'use strict';

/* Filters */
angular.module('redrumAppFilters', [])

	.filter('splitRow', function() {
		return function (input, count){
			console.log("input:" + input);
			console.log("count:" + count);
			var out = [];
				if(typeof input === "object"){
					for (var i=0, j=input.length; i < j; i+=count) {
						out.push(input.slice(i, i+count));
					}
				}
			return out;
		}
	})
	.filter("prettify", function () {
		return function syntaxHighlight(game) {
			var json = JSON.stringify(game, undefined, 4);
			json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
			return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, 
				function (match) {
					//console.log(match);
					var cls = 'number';
					if (/^"/.test(match)) {
						if (/:$/.test(match)) {
							cls = 'key';
						} else {
							cls = 'string';
						}
					} else if (/true|false/.test(match)) {
						cls = 'boolean';
					} else if (/null/.test(match)) {
						cls = 'null';
					}
					return '<span class="' + cls + '">' + match + '</span>';
			});
		}
});