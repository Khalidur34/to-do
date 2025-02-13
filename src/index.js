import "./styles.css";
import "../src/scripts/Task";
import { Project } from "../src/scripts/Project";
import { UserInterface } from "../src/scripts/UserInterface";
import { Projects } from "../src/scripts/Projects";
import { Tasks } from "./scripts/Tasks";
import { Task } from "../src/scripts/Task";
import { RightDisplay } from "./scripts/RightDisplay";
import { MainDisplay } from "./scripts/MainDisplay";
import { ProjectPage } from "./scripts/ProjectPage";

const displayCardContent = document.querySelector("#displayCard");
const bodyContent = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const projectsButton = document.querySelector(".projects");

const projectPage = new ProjectPage();
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
    projectPage.load();
});









