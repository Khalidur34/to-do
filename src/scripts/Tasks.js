export class Tasks {
    tasks = [];
    constructor() {};

    allTasks() {
        return JSON.parse(localStorage.getItem("tasks"));
    }

    addTask(task) {
        this.tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}