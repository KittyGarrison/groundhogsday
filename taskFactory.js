angular
  .module('todoApp')
  .factory('taskFactory', taskFactory);

  function taskFactory(){

    function create(taskName){
      return new Task(taskName);
    };


    function Task(name){
      this.name = name;
      this.isDone = false;
      this.finish = function(){
        this.isDone = !this.isDone;
      };
    };

    return {create: create};
  }
