
	
	var   Class 		= require('ee-class')
		, log 			= require('ee-log')
		, assert 		= require('assert')
		, travis 		= require('ee-travis');



	var CinergyAPI = require('../')
		, api;



	describe('The CinergyAPI', function() {
		it('should not crash when instantiated', function() {
			api = new CinergyAPI(travis.get('API_KEY'));
		});



		it('should be able to list movies', function(done) {
			this.timeout(10000);

			api.movies().offset(0).limit(2).list().then(function(movies) {
				assert(movies);
				assert(movies.length === 2);
				done();
			}).catch(done);
		});



		it('the pager should work', function(done) {
			this.timeout(10000);

			api.movies().offset(2).limit(2).list(function(err, movies, pager) {
				if (err) done(err);
				else {
					assert(pager);
					pager.next(function(err, movies, pager) {
						if (err) done(err);
						else {
							assert(movies);
							assert(movies.length === 2);
							done();
						}
					});
				}
			});
		});
	});
	