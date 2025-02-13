import { Projects } from "./Projects"
import { UserInterface } from "./UserInterface";
import { MainDisplay } from "./MainDisplay";
import { RightDisplay } from "./RightDisplay";
import { Project } from "./Project";

export class ProjectPage{
    projects;
    mainDisplay;
    rightDisplay;
    ui = new UserInterface();

    constructor(projects, mainDisplay, rightDisplay) {
        this.projects = projects
        this.mainDisplay = mainDisplay;
        this.rightDisplay = rightDisplay;
    };

    load() {
        //clear bodycontent and displays all the projects
        this.loadProjects();

        //pops a form in the right to create a new project
        this.addNewProjectButtonListener();

        //pops project details in the right
        this.projectDetailButtonListener();
    }

    loadProjects() {
        let projectsDiv = this.ui.divProjects(this.projects.allProjects());
        this.rightDisplay.removeContent();
        this.mainDisplay.addContent(projectsDiv);
    }

    addNewProjectButtonListener = () => {
        const addProjectButton = document.querySelector(".addProjectButtonCard");
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
            let projectTitle = document.querySelector('[name = "title"]').value;
            let projectDescription = document.querySelector('[name = "description"]').value;
            let projectTasks = [];
            const thisProject = new Project(projectTitle, projectDescription, projectTasks);
            this.addNewProject(thisProject);
            this.rightDisplay.removeContent();
        });
    };

    addNewProject(newProject) {
        this.projects.addProject(newProject);
        this.load();
    }

    projectDetailButtonListener() {
        const projectDetailButtons = document.querySelectorAll(".projectButton");
        projectDetailButtons.forEach(button => {
            this.addDisplayProjectButtonListener(button);
        });
    }

    addDisplayProjectButtonListener(button) {
        button.addEventListener('click', () => {
            if(button.getAttribute("clicked") === "false") {
                this.displayProjectDetails(button);
                button.setAttribute("clicked", "true");
            }
            else {
                this.rightDisplay.removeContent();
                button.setAttribute("clicked", "false");
            }
        });
    }

    displayProjectDetails(button) {
        let targetProject = this.projects.allProjects()[button.value];
        console.log(targetProject);
        this.rightDisplay.addContent(this.ui.displayProjectDetails(targetProject));

    }

    
}