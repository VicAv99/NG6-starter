import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import homeService from './home/home.service'

let componentModule = angular.module('app.components', [
  Home,
  About,
  homeService
])

.name;

export default componentModule;
