'use strict';

/* Filters */
angular.module('redrumAppFilters', [])
	.filter('splitRow', function(){
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
	});