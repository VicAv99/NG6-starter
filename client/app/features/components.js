import angular from 'angular';
import Home from './home/home';
import Task from './tasks/task';
import homeService from './home/home.service'

let componentModule = angular.module('app.components', [
  Home,
  Task,
  homeService
])

.name;

export default componentModule;
