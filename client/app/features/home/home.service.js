import angular from 'angular';

class HomeService {
  url = 'https://levelup-json.herokuapp.com/Q';
  constructor($http) {
    this.http = $http;
  }

  getRequests() {
    return this.http
      .get(this.url);
  }

  getRequest(requestId) {
    return this.http
      .get(`${this.url}/${requestId}`);
  }

  searchRequest(search) {
    return this.http
      .get(`${this.url}?q=${search}`);
  }

  create(request) {
    return this.http
      .post(this.url, request);
  }

  update(request) {
    return this.http
      .patch(`${this.url}/${request.id}`);
  }

  remove(requestId) {
    return this.http
      .delete(`${this.url}/${requestId}`);
  }

}

HomeService.$inject = ['$http'];
let homeService = angular.module('homeServiceModule', [])
  .service('homeService', HomeService).name;

export default homeService;
