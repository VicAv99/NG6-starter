class NavbarController {
  constructor($http) {
    this.navLinks = ['home', 'tasks'];
    this.name = 'ES6 STARTER';
    this.http = $http;
    this.requests = [];
    this.url = 'https://levelup-json.herokuapp.com/Q'
    this.form = {
      search: ''
    }
  }

  searchProjects(search) {
    return this.http
      .get(`${this.url}?q=${search}`);
  }
}

NavbarController.$inject = ['$http'];

export default NavbarController;
