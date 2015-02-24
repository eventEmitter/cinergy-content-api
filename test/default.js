
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, travis 		= require('ee-travis');



	var CinergyAPI = require('../')
		, api;



	describe('The CinergyAPI', function() {
		it('should not crash when instantiated', function() {
			api = new CinergyAPI(travis.get('DB_HOST'));
		});
	});
	