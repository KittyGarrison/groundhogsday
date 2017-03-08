angular
  .module('todoApp')
  .controller('listCtrl', listCtrl);

  function listCtrl(taskFactory) {
    var vm = this;
    vm.title = 'Todo list';
    vm.taskList = [];
    vm.taskName = '';
    vm.addTask = addTask;
    vm.removeTask = removeTask;

    function removeTask(task){
      var index = vm.taskList.indexOf(task);
      vm.taskList.splice(index,1);
    };

    function addTask(task){
      vm.taskList.push(taskFactory.create(task));
      vm.taskName = "";
    };
  }
