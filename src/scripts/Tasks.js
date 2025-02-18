export class Tasks {
    tasks = [];
    constructor() {};

    allTasks() {
        let allTasks = JSON.parse(localStorage.getItem("tasks"))
        if(allTasks == null) {
            return this.tasks;
        }
        return allTasks;
    }

    addTask(task) {
        this.tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    removeTask(task) {
        const index = this.tasks.findIndex(e => e.title === task.title);
        if(index != -1) {
            this.tasks.splice(index, 1);
        }
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}