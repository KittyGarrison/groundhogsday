angular
  .module('todoApp')
  .controller('listCtrl', listCtrl);

  function listCtrl() {
    var vm = this;
    vm.title = 'Todo list';
    vm.taskList = [];
    vm.taskText = '';
    vm.addTask = addTask;

    function addTask(task){
      vm.taskList.push(task);
      vm.taskText = "";
      console.log(vm.taskList);
    }
}
