angular
  .module('todoApp')
  .controller('listCtrl',[listCtrl])

  function listCtrl(){
    var vm = this;
    vm.message = 'Todo';
    vm.list = [];
    vm.taskName = '';
    vm.addTask = addTask;
    vm.removeTask = removeTask;
    vm.friend = {
      name:"Lilli",
      hairColor:"brown",
      newColor:"new color",
      changeHair: function(color){
        console.log(color);
        this.hairColor = color
      }
    }


    function addTask(name){
      vm.list.push(name);
      vm.taskName = '';
    }

    function removeTask(task) {
      var index = vm.list.indexOf(task);
      vm.list.splice(index,1);
    }
  }
