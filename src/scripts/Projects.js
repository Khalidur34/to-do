export class Projects {
    projects = [];
    constructor() {};

    allProjects() {
        return this.projects;
    }

    addProject(project) {
        this.projects.push(project);
    }
}