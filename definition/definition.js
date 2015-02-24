!function() {
    var   RESTfulAPIClient = require('restful-api-client')
        , log = require('ee-log');



    module.exports = {
          host          : 'http://api.cinergy.ch'
        , basePath      : '/v1.0/cinema'
        , backoffStatus : 429
        , backoffTime   : 5
        , rateLimit     : 60
        , methods: {
            list: {
                  httpMethod        : 'get'
                , requestBuilder    : new RESTfulAPIClient.QueryListRequestBuilder()
                , offsetHandler     : new RESTfulAPIClient.QueryOffsetHandler()
                , limitHandler      : new RESTfulAPIClient.QueryLimitHandler()
                , envelopeHandler   : new RESTfulAPIClient.ResponseEnvelopeHandler()
                , paginator         : new RESTfulAPIClient.EnvelopePaginator('links.next.href', 'links.previous.href')
                , headers: {
                    accept: 'application/json'
                }
            }
        }
        , resources: {
            distributors: {
                  list: '/distributors'
            }
            , movies: {
                  list: '/movies'
                , resources: {
                    images: {
                        list: 'images'
                    }
                    , posters: {
                        list: 'posters'
                    }
                    , trailers: {
                        list: 'trailers'
                    }
                }
            }
            , shows: {
                  list: '/shows'
            }
            , theatres: {
                  list: '/theatres'
                , resources: {
                    shows: {
                        list: 'shows'
                    }
                }
            }
        }
    }
}();
