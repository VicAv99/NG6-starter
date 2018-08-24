class NavbarController {
  requests = [];
  name = 'ES6 STARTER';
  navLinks = ['home', 'tasks'];
  constructor(homeService) {
    this.homeService = homeService;
    this.form = {
      search: ''
    }
  }

  search(search) {
    console.log(search)
    this.homeService.searchRequest(search);
  }
}

NavbarController.$inject = ['homeService'];

export default NavbarController;
