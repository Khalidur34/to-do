import { UserInterface } from "./UserInterface";
import { Project } from "./Project";
import { Task } from "./Task";

export class ProjectPage{
    projects;
    mainDisplay;
    rightDisplay;
    ui = new UserInterface();

    constructor(tasks, projects, mainDisplay, rightDisplay) {
        this.tasks = tasks;
        this.projects = projects
        this.mainDisplay = mainDisplay;
        this.rightDisplay = rightDisplay;
    };

    load() {
        this.loadProjects();
        this.addNewProjectButtonListener();
        this.projectDetailButtonListener();
    }

    loadProjects() {
        let projectsDiv = this.ui.divProjects(this.projects.allProjects());
        this.rightDisplay.removeContent();
        this.mainDisplay.addContent(projectsDiv);
    }

    addNewProjectButtonListener = () => {
        const addProjectButton = document.querySelector(".addButton");
        addProjectButton.addEventListener('click', this.displayProjectCreationForm);
    };

    displayProjectCreationForm = () => {
        const projectCreationFormDiv = this.ui.createProjectFormDiv();
        this.rightDisplay.addContent(projectCreationFormDiv);
        this.projectFormSubmissionHandler(projectCreationFormDiv);
    };

    projectFormSubmissionHandler = (div) => {
        div.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            const title = formData.get("title");
            const description = formData.get("description");
            const projectTasks = [];
            const newProject = new Project(title, description, projectTasks);
            this.addNewProject(newProject);
            this.rightDisplay.removeContent();
        });
    };

    addNewProject(newProject) {
        this.projects.addProject(newProject);
        this.load();
    }

    projectDetailButtonListener() {
        const projectDetailButtons = document.querySelectorAll(".detailButton");
        projectDetailButtons.forEach(button => {
            this.addDisplayProjectButtonListener(button);
        });
    }

    addDisplayProjectButtonListener(button) {
        button.addEventListener('click', () => {
            if(button.getAttribute("clicked") === "false") {
                const targetProject = this.projects.allProjects()[button.value];
                this.displayProjectDetails(targetProject);
                button.setAttribute("clicked", "true");
            }
            else {
                this.rightDisplay.removeContent();
                button.setAttribute("clicked", "false");
            }
        });
    }

    displayProjectDetails(targetProject) {
        this.rightDisplay.addContent(this.ui.displayProjectDetails(targetProject));
        this.addNewTaskButtonListener(targetProject);
        this.deleteProject(targetProject); 
    }

    addNewTaskButtonListener = (targetProject) => {
        const addTaskButton = document.querySelector('.addTask');
        addTaskButton.addEventListener('click', () => this.displayTaskCreationForm(targetProject));
    }

    displayTaskCreationForm = (targetProject) => {
        const createTaskFormDiv = this.ui.createTaskFormDiv();
        this.rightDisplay.addContent(createTaskFormDiv);
        this.taskFormSubmissionHandler(createTaskFormDiv, targetProject);
    }

    taskFormSubmissionHandler = (div, targetProject) => {
        div.addEventListener('submit', (e) => {
            e.preventDefault();
            const form = e.target;
            const formData = new FormData(form);
            
            const title = formData.get("title");
            const description = formData.get("description");
            const dueDate = formData.get("dueDate");
            const priority = formData.get("priority");
            const task = new Task(title, description, dueDate, priority);
            this.tasks.addTask(task);
            targetProject.addTask(task);
            this.displayProjectDetails(targetProject);
        });
    };

    deleteProject(targetProject) {
        const deleteButton = document.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            let temp = this.projects.allProjects().findIndex((targetProject) => targetProject == deleteButton.value);
            this.projects.allProjects().splice(temp, 1);
            this.rightDisplay.removeContent();
            this.load();
        }); 
    }
    
}