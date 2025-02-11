export class Project {
    tasks = [];
    constructor(title, description, tasks) {
        this.title = title;
        this.description = description;
        this.tasks = tasks;
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(task) {
        
    }

    getTasks() {
        return this.tasks;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

}