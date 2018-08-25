class TaskController {
  todoHeaders = ['title', 'description', 'urgent', 'completed'];
  todos = [];
  constructor(taskService) {
    this.taskService = taskService;
    this.getAllTodos();
    this.initForm();
    this.name = 'Ng6 Starter Tasks';
  }

  getAllTodos() {
    this.taskService
      .getTodos()
      .then(res => this.todos = res.data);
  }

  saveTodo(todo) {
    if (todo.id) {
      this.updateTodo(todo);
    } else {
      this.createTodo(todo);
    }
  }

  createTodo(todo) {
    this.taskService
      .create(todo)
      .then(res => this.getAllTodos(),
        err => console.log('error', err))
      .then(() => this.resetForm(todo));
  }

  updateTodo(todo) {
    console.log('COMP', todo)
    this.taskService
      .update(todo)
      .then(res => this.getAllTodos(),
        err => console.log('error', err))
      .then(() => this.resetForm(todo));
  }

  removeTodo(todoId) {
    this.taskService
      .remove(todoId)
      .then(res => this.getAllTodos(),
        err => console.log('error', err))
      .then(() => this.resetForm(todo));
  }

  initForm() {
    this.form = {
      id: null,
      title: '',
      description: '',
      urgent: false,
      completed: false
    }
  }

  patchForm(form) {
    this.form = form;
  }

  resetForm(form) {
    this.initForm();
  }
}

TaskController.$inject = ['taskService'];

export default TaskController;
