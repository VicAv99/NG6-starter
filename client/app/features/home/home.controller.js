class HomeController {
  confirm;
  requests = [];

  constructor(homeService) {
    this.homeService = homeService;
    this.initForm();
    this.getHelpRequests();
  }

  getHelpRequests() {
    this.homeService
      .getRequests()
      .then(res => this.requests = res.data,
        err => console.log('error', err));
  }

  save(req) {
    if (req.id) {
      this.updateRequest(req);
    } else {
      this.createRequest(req);
    }
  }

  createRequest(req) {
    this.homeService
      .create(req)
      .then(res => this.getHelpRequests(),
        err => console.log(err))
      .then(() => this.clearForm());
  }

  updateRequest(req) {
    const { $$hashKey, ...payload } = req;

    this.homeService
      .update(payload)
      .then(res => this.getHelpRequests(),
        err => console.log('error', err))
      .then(() => this.clearForm());
  }

  deleteRequest(id) {
    this.confirm = confirm('Are you sure you want to delete?');

    if (this.confirm) {
      this.homeService
        .remove(id)
        .then(res => this.getHelpRequests(),
          err => console.log('error', err))
        .then(() => this.clearForm());
    }
  }

  initForm() {
    this.form = {
      id: null,
      requester: '',
      assignee: 'Jon',
      project: 'Default',
      name: '',
      description: '',
      createdAt: ''
    }
  }

  patchForm(form) {
    this.form = form;
  }

  clearForm(form) {
    this.form = {
      id: null,
      requester: '',
      assignee: 'Jon',
      project: 'Default',
      name: '',
      description: '',
      createdAt: ''
    };
  }
}

HomeController.$inject = ['homeService'];

export default HomeController;
