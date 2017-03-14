angular
  .module('todoApp')
  .controller('listCtrl',listCtrl)

  function listCtrl(taskFactory){
    var vm = this;
    vm.message = 'Todo';
    vm.list = [];
    vm.taskName = '';
    vm.addTask = addTask;
    vm.removeTask = removeTask;

    function addTask(name){
      vm.list.push(taskFactory.create(name));
      clear();
    }

    function removeTask(task) {
      var index = vm.list.indexOf(task);
      vm.list.splice(index,1);
    }

    function clear(){
    vm.taskName = '';
    }
  }
