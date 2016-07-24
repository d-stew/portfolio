(function() {
  'use strict';

  angular.module('app')
    .directive('projects', projectsDirective);

  function projectsDirective () {
    return {
      restrict: 'E',
      templateUrl: '/app/projects/projects.directive.html',
      controller: function ($scope) {



        $scope.show = function(id) {
          console.log('fired')
          document.getElementById('projects').className =
            (document.getElementById('projects').className
            .replace(/\boff\b/, 'fade-in'));

        }

      }
    }
  }
}());
