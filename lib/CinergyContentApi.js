!function() {

	var   Class              = require('ee-class')
		, log                = require('ee-log')
        , RestfulAPI         = require('restful-api-client')
        , APISpecfication    = require('../definition/definition');





	module.exports = new Class({
        inherits: RestfulAPI

		, init: function init(APIKey) {
            this.apiKey = APIKey;

            // automatically build the api
            init.super.call(this, APISpecfication);
        }


        /**
         * add my auth token to each of the requests
         */
        , prepareRequest: function(request) {
            if (!request.headers) request.headers = {};

            request.headers['authorization'] = 'testAuth '+this.authToken;
        }
	});
}();
