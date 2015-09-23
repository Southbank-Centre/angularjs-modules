(function() {
  'use strict';

  // Mocked Service
  angular.module('mock.scContent', [])
    .factory('scContentGet', function($q) {
        return {
          item: function() { return $q.when({'data':'here'}); }
        };
    });

  describe('Controller: ScArrangementItemCtrl', function() {

    var $controller;
    var $stateParams;
    var $timeout;
    var ScArrangementItemCtrl;
    var scContentGet;
    var mockScContentGet;

    beforeEach(module('ui.router'));
    beforeEach(module('scArrangement'));
    beforeEach(module('mock.scContent'));

    beforeEach(inject(function(_$controller_, _scContentGet_, _$stateParams_, _$timeout_, $q) {
      $controller = _$controller_;
      $stateParams = _$stateParams_;
      $timeout = _$timeout_;
      scContentGet = _scContentGet_;

      ScArrangementItemCtrl = $controller('ScArrangementItemCtrl', {});
    }));

    it('should expose and arrangement property', function() {
      expect(ScArrangementItemCtrl.arrangement).toBeDefined();
    });

    describe('Method: getArrangement', function() {

      it('should expose and getArrangement method', function() {
        expect(ScArrangementItemCtrl.getArrangement).toBeDefined();
      });

      it('should get the Arrangement upon activation', function() {
        expect(ScArrangementItemCtrl.arrangement).toEqual({});
        ScArrangementItemCtrl.getArrangement();
        $timeout.flush();
        expect(ScArrangementItemCtrl.arrangement).toEqual({'data':'here'});
      });

    });

  });
})();