import "./styles.css";
import "../src/scripts/Task";
import { Project } from "../src/scripts/Project";
import { UserInterface } from "../src/scripts/UserInterface";
import { Projects } from "../src/scripts/Projects";
import { Tasks } from "./scripts/Tasks";
import { Task } from "../src/scripts/Task";
import { RightDisplay } from "./scripts/RightDisplay";
import { MainDisplay } from "./scripts/MainDisplay";

const displayCardContent = document.querySelector("#displayCard");
const bodyContent = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const projectsButton = document.querySelector(".projects");

const mainDislay = new MainDisplay();
const rightDisplay = new RightDisplay();
const tasks = new Tasks();
const projects = new Projects();
const ui = new UserInterface();

//pressing home button displays all the tasks
homeButton.addEventListener('click', () => {
    let currTasks = tasks.allTasks;
    bodyContent.removeChild(bodyContent.lastChild);
    bodyContent.appendChild(ui.divTasks(currTasks));
});

//pressing project button displays all the projects
projectsButton.addEventListener('click', () => {
    //main project tab
    loadProjectPage();
});

function loadProjectPage(){
    //clear bodycontent and displays all the projects
    produceProjectPage();

    //pops a form in the right to create a new project
    addNewProjectButtonListener();

    //pops project details in the right
    projectDetailButtonListener(); 
}

function produceProjectPage() {
    let projectsPageDiv = ui.divProjects(projects.allProjects());
    mainDislay.addContent(projectsPageDiv);
}

function addNewProjectButtonListener() {
    const addProjectButton = document.querySelector(".addProjectButtonCard");
    displayProjectForm(addProjectButton);
}

function displayProjectForm(button) {
    button.addEventListener('click', () => {
        //generates and displays a addProject form
        const formDiv = ui.createProjectFormDiv();
        rightDisplay.addContent(formDiv);
        projectFormSubmissionHandler(formDiv);
    });
}

function projectFormSubmissionHandler(div) {
    div.addEventListener('submit', function(e) {
        e.preventDefault(); 
        let projectTitle = document.querySelector('[name = "title"]').value ;
        let projectDescription = document.querySelector('[name = "description"]').value ;
        let projectTasks = [];
        const thisProject = new Project(projectTitle, projectDescription, projectTasks);
        addNewProject(thisProject);
        rightDisplay.removeContent();
    });
}

function addNewProject(newProject) {
    projects.addProject(newProject);
    loadProjectPage();
}

function projectDetailButtonListener() {
    const projectDetailButtons = document.querySelectorAll(".projectButton");
    projectDetailButtons.forEach(button => {
        displayProjectDetails(button);
    });
}

function displayProjectDetails(button) {
    button.addEventListener('click', () => {
        if(button.getAttribute("clicked") === "false") {
            let targetProject = projects.allProjects()[button.value];
            rightDisplay.addContent(ui.displayProjectDetails(targetProject));
            button.setAttribute("clicked", "true");
        }
        else {
            rightDisplay.removeContent();
            button.setAttribute("clicked", "false");
        }
    });
}









