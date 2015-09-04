'use strict';
var assert = require('assert');

describe('Sample test', function(){
  
    it('Should return -1 when the value is not present', function(done){
      
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
      assert.equal(0, [1,2,3].indexOf(1));
      return done();

    });


});