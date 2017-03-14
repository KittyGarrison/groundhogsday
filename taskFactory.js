angular
  .module('todoApp')
  .factory('taskFactory', taskFactory)

  function taskFactory() {
    function create(name) {
        return new task(name);
    };
    function task(name) {
      this.name = name;
      this.idDone = false;
      this.complete = function() {
        this.isDone = !this.isDone;
      }
    };

    return {create:create};
  }
