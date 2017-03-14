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
      this.editMode = false;
      this.complete = function() {
        this.isDone = !this.isDone;
      }
      this.edit = function() {
        this.editMode = !this.editMode;
      }
    };

    return {create:create};
  }
