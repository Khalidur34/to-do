import "./styles.css";
import "../src/scripts/Task";
import { Project } from "../src/scripts/Project";
import { UserInterface } from "../src/scripts/UserInterface";
import { Projects } from "../src/scripts/Projects";
import { Tasks } from "./scripts/Tasks";
import { Task } from "../src/scripts/Task";

const bodyContent = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const projectsButton = document.querySelector(".projects");

const tasks = new Tasks();
const projects = new Projects();
const ui = new UserInterface();

let hello = [];
const sampleproject = new Project("Project", "This is a sample project", hello);
projects.addProject(sampleproject);

const sampleproject2 = new Project("Project2", "This is a sample project", hello);
projects.addProject(sampleproject2);

const samepleTask = new Task("Task", "This is a task", 10, "High");
tasks.addTask(samepleTask);


homeButton.addEventListener('click', () => {
    let currTasks = tasks.allTasks;
    bodyContent.removeChild(bodyContent.lastChild);
    bodyContent.appendChild(ui.divTasks(currTasks));
});

projectsButton.addEventListener('click', () => {
    let currProjects = projects.allProjects();
    bodyContent.removeChild(bodyContent.lastChild);
    bodyContent.appendChild(ui.divProjects(currProjects));
    
    let projectDetailButtons = document.querySelectorAll(".projectButton");
    displayProjectDetails(projectDetailButtons);
});

function displayProjectDetails(e) {
    e.forEach(button => {
        button.addEventListener('click', () => {
            if(button.getAttribute("clicked") === "false") {
                let targetProject = projects.allProjects()[button.value];
                bodyContent.appendChild(ui.displayProjectDetails(targetProject));
                button.setAttribute("clicked", "true");
            }

            else {
                bodyContent.removeChild(bodyContent.lastChild);
                button.setAttribute("clicked", "false");
            }
        });
    });
}









