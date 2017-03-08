angular
  .module('todoApp')
  .factory('taskFactory', taskFactory);

  function taskFactory(){
    function Task(name){
      this.name = name;
      this.isDone = false;
    };

    return Task;
  }
