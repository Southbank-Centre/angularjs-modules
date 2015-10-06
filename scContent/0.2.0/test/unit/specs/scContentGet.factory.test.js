(function() {
  'use strict';

  describe('Factory: scContentGet', function() {

    var scContentGet;
    var scContentBaseURL;
    var $httpBackend;
    var $rootScope;

    beforeEach(module('scContent'));

    beforeEach(function() {
      module(function($provide) {
        $provide.constant('scContentBaseURL', 'http://example.com');
      });
    });

    beforeEach(inject(function(_scContentGet_, _scContentBaseURL_, _$httpBackend_, _$rootScope_) {
      scContentGet = _scContentGet_;
      scContentBaseURL = _scContentBaseURL_;
      $httpBackend = _$httpBackend_;
      $rootScope = _$rootScope_;

      spyOn($rootScope, '$broadcast');
    }));

    describe('Method: item', function() {

      it('should return the requested single item data if the request was well-formed and successful', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(200, '{"test": "data"}');

        scContentGet
          .item('event', 'event-title-here-1234', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toEqual({"test": "data"});

      });

      it('should return no data and broadcast an error if item not found', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(404, null);

        scContentGet
          .item('event', 'event-title-here-1234', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

      it('should return no data and broadcast an error if there is a server error', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(500, null);

        scContentGet
          .item('event', 'event-title-here-1234', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

    });

    describe('Method: items', function() {

      it('should return the requested items data if the request was well-formed and successful', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event.json?pretty=true&size=20')
          .respond(200, '[{"test": "data"},{"more":"data"}]');

        scContentGet
          .items('event', {'pretty': 'true', 'size': '20'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toEqual([{"test": "data"},{"more":"data"}]);

      });

      it('should return no data and broadcast an error if items are not found', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event.json?pretty=true&size=20')
          .respond(404, null);

        scContentGet
          .items('event', {'pretty': 'true', 'size': '20'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

      it('should return no data and broadcast an error if there is a server error', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event.json?pretty=true&size=20')
          .respond(500, null);

        scContentGet
          .items('event', {'pretty': 'true', 'size': '20'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

    });

    describe('Method: itemByPath', function() {

      it('should return the requested single item data if the request was well-formed and successful', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(200, '{"test": "data"}');

        scContentGet
          .itemByPath('api/event/event-title-here-1234.json', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toEqual({"test": "data"});

      });

      it('should return no data and broadcast an error if item not found', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(404, null);

        scContentGet
          .itemByPath('api/event/event-title-here-1234.json', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

      it('should return no data and broadcast an error if there is a server error', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(500, null);

        scContentGet
          .itemByPath('api/event/event-title-here-1234.json', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

    });

    describe('Method: itemByURL', function() {

      it('should return the requested single item data if the request was well-formed and successful', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(200, '{"test": "data"}');

        scContentGet
          .itemByURL(scContentBaseURL + '/api/event/event-title-here-1234.json', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toEqual({"test": "data"});

      });

      it('should return no data and broadcast an error if item not found', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(404, null);

        scContentGet
          .itemByURL(scContentBaseURL + '/api/event/event-title-here-1234.json', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

      it('should return no data and broadcast an error if there is a server error', function() {

        var data;

        $httpBackend
          .expectGET(scContentBaseURL + '/api/event/event-title-here-1234.json?_source=name,startDate&pretty=true')
          .respond(500, null);

        scContentGet
          .itemByURL(scContentBaseURL + '/api/event/event-title-here-1234.json', {'_source': 'name,startDate', 'pretty': 'true'})
          .then(function (response) {
            data = response;
        });

        $httpBackend.flush();

        expect(data).toBe(undefined);
        expect($rootScope.$broadcast).toHaveBeenCalledWith('data-error', jasmine.any(Object));

      });

    });

  });
})();