export class Tasks {
    tasks = [];
    constructor() {};

    allTasks() {
        return this.tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }
}