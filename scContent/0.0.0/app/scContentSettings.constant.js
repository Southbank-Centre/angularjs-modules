(function() {
  'use strict';

  /**
   * @ngdoc factory
   * @name scContentGet
   * @description
   *
   * Provides connectivity with Southbank Centre content provider and index
   */
  angular
    .module('scContent')
    .constant('scContentSettings', {
      BASE_URL: 'http://52.17.82.208'
    });

})();