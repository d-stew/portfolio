(function() {
  'use strict';

  angular.module('app')
    .directive('projects', projectsDirective);

  function projectsDirective () {
    return {
      restrict: 'E',
      templateUrl: '/app/projects/projects.directive.html',
      controller: function () {
      }
    }
  }
}());
