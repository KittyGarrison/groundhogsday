(function(){
  'use strict'
  angular
    .module('todo')
    .directive('checkbox', checkbox)

    function checkbox(){
      return {
      restrict: 'E',
      scope: {
        checked: '=info'
      },
      templateUrl: 'checkbox.html'
      };
    }
})();
