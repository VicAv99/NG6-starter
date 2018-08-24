class HomeController {
  constructor($http) {
    this.http = $http;
    this.name = 'home';
    this.requests = [];
    this.getHelpRequests();
  }

  getHelpRequests() {
    return this.http.get('https://levelup-json.herokuapp.com/Q')
      .then(res => this.requests = res.data);
  }
}

HomeController.$inject = ['$http']

export default HomeController;
