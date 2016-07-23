(function() {
  'use strict';

  angular.module('app')
    .directive('contact', contactDirective);

  function contactDirective () {
    return {
      restrict: 'E',
      templateUrl: '/app/contact/contact.directive.html',
      controller: function () {
      }
    }
  }
}());
