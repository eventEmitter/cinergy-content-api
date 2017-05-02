# cinergy-content-api

[![Greenkeeper badge](https://badges.greenkeeper.io/eventEmitter/cinergy-content-api.svg)](https://greenkeeper.io/)

Unofficial Cinergy Content API SDK

The supported endpoints are:

    - movies
        - images
        - posters
        - trailers
    - distributors
    - shows
    - theatres
        - shows
    - genres
    - reviews


## installation

    npm i cinergy-content-api

## build status

[![Build Status](https://travis-ci.org/eventEmitter/cinergy-content-api.png?branch=master)](https://travis-ci.org/eventEmitter/cinergy-content-api)


## usage

Set up the client

    var apiClient = api = new CinergyAPI('my-secret-cinergy-token');


get movies, start at offset 2, return 2 movies per call, use the pager

    apiClient.movies().offset(2).limit(2).list(function(err, movies, pager) {
        // first set of movies

        pager.next(function(err, movies, pager) {
            // next set of movies
        });
    });


get the teathre with the id 852

    apiClient.theatres(852).list(function(err, movies) {
        
    });

get images for the movie with the id 78765

    apiClient.movies(78765).images().list(function(err, images, pager) {
        
    });