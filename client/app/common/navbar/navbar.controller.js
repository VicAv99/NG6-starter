class NavbarController {
  requests = [];
  name = 'ES6 STARTER';
  navLinks = [{ link: 'home', label: 'HOME' }, { link: 'tasks', label: 'TASKS' }];
  constructor(homeService) {
    this.homeService = homeService;
    this.form = {
      search: ''
    }
  }

  search(search) {
    console.log('SRCH', search)
    this.homeService.searchRequest(search);
  }
}

NavbarController.$inject = ['homeService'];

export default NavbarController;
