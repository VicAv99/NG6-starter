import angular from 'angular';
import uiRouter from 'angular-ui-router';
import taskComponent from './task.component';

let taskModule = angular
  .module('task', [uiRouter])
  .config($stateProvider => {
    'ngInject';

    $stateProvider.state('tasks', {
      url: '/tasks',
      component: 'task'
    });
  })

  .component('task', taskComponent).name;

export default taskModule;
