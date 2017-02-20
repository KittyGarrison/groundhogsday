(function () {
  'use strict';
  angular
    .module('todo')
    .controller('listController', listController);

    function listController(){
      var vm = this;
      vm.addTask = addTask;
      vm.completeTask = completeTask;
      vm.deleteTask = deleteTask;
      vm.list = [];
      vm.inputText = "";


      function addTask(text){
        vm.list.push(new Task(text));
        vm.inputText = "";
      }

      function deleteTask(task){
        vm.list.splice(vm.list.indexOf(task),1);
      }

      function completeTask(task){
        task.isDone = !task.isDone;
      }

      function Task(text){
        this.text = text,
        this.isDone = false
      };




    }

})();
