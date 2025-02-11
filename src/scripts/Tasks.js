export class Tasks {
    allTasks = [];
    constructor() {};

    allTasks() {
        return this.allTasks;
    }

    addTask(task) {
        this.allTasks.push(task);
    }
}