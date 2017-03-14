angular
  .module('todoApp')
  .controller('listCtrl',[listCtrl])

  function listCtrl(){
    var vm = this;
    vm.message = "Todo";
  }
