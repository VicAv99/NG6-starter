class HomeController {
  confirm;
  constructor($http) {
    this.http = $http;
    this.url = 'https://levelup-json.herokuapp.com/Q';
    this.requests = [];
    this.getHelpRequests();
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

  getHelpRequests() {
    return this.http
      .get(this.url)
      .then(res => (this.requests = res.data));
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

  save(req) {
    if (req.id) {
      this.updateRequest(req);
    } else {
      this.createRequest(req);
    }
  }

  createRequest(req) {
    return this.http
      .post(this.url, req)
      .then(res => {
        this.getHelpRequests();
      },
        err => console.log('error', err)
      ).then(() => this.clearForm(req));
  }

  updateRequest(req) {
    const { $$hashKey, ...payload } = req;
    if (!req.id) {
      this.createRequest(payload);
    } else {
      return this.http
        .patch(`${this.url}/${payload.id}`)
        .then(res => {
          this.getHelpRequests();
        },
          err => console.log('error', err)
        ).then(() => this.clearForm(req));
    }
  }

  deleteRequest(id) {
    this.confirm = confirm('Are you sure you want to delete?');
    if (this.confirm) {
      return this.http
        .delete(`${this.url}/${id}`)
        .then(res => {
          this.getHelpRequests();
        },
          err => console.log('error', err)
        ).then(() => this.clearForm(req));
    }
  }
}

HomeController.$inject = ['$http'];

export default HomeController;
