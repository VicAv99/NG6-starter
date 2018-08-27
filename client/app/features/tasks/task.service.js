import angular from 'angular';

class TaskService {
  url = 'https://levelup-json-jbbfoyseci.now.sh/todos';
  constructor($http) {
    this.http = $http;
  }

  getTodos() {
    return this.http
      .get(this.url);
  }

  create(todo) {
    return this.http
      .post(this.url, todo);
  }

  update(todo) {
    console.log('SERV', todo);
    return this.http
      .patch(`${this.url}/${todo.id}`, todo);
  }

  remove(todoId) {
    return this.http
      .delete(`${this.url}/${todoId}`);
  }
}

TaskService.$inject = ['$http'];

let taskService = angular.module('taskServiceModule', [])
  .service('taskService', TaskService).name;

export default taskService;
