const app = new Vue({
  el: "#app",
  data: {
    todoName: "Lavar os pratos",
    todos: [
      { task: "Fazer café", done: true },
      { task: "Codar", done: false },
    ],
    todoMessage: "Ainda há tarefas a se fazer!",
  },
  created: function () {
    window.addEventListener("keypress", (e) => {
      if (e.key == "Enter") this.addTodo();
    });
  },
  methods: {
    addTodo: function () {
      if (this.todoName == "") return;

      this.todos.push({
        task: this.todoName,
        done: false,
      });

      this.todoName = "";
      this.verifyTasks();
    },
    removeTodo: function (todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);

      this.verifyTasks();
    },
    verifyTasks: function () {
      let allDone = true;

      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].done != true) allDone = false;
      }

      if (allDone)
        this.todoMessage = "Parabéns! Todas as tarefas foram feitas :)";
      else this.todoMessage = "Ainda há tarefas a se fazer!";
    },
  },
});
