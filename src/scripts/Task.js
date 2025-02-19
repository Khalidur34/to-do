export class Task {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getPriority() {
        return this.priority;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }
}