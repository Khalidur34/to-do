import "./styles.css";
import { Project } from "../src/scripts/Project";
import { Projects } from "../src/scripts/Projects";
import { Tasks } from "./scripts/Tasks";
import { RightDisplay } from "./scripts/RightDisplay";
import { MainDisplay } from "./scripts/MainDisplay";
import { ProjectPage } from "./scripts/ProjectPage";
import { TaskPage } from "./scripts/TaskPage";

const homeButton = document.querySelector(".home");
const projectsButton = document.querySelector(".projects");

const projects = new Projects();
const mainDislay = new MainDisplay();
const rightDisplay = new RightDisplay();
const tasks = new Tasks();
const projectPage = new ProjectPage(tasks, projects, mainDislay, rightDisplay);
const taskPage = new TaskPage(tasks, mainDislay, rightDisplay);
const sampleProject = new Project("Default Project", "This contains all the tasks", tasks.allTasks());
projects.addProject(sampleProject);


taskPage.load();
//pressing home button displays all the tasks
homeButton.addEventListener('click', () => {
    //main task tab
    taskPage.load();
});

//pressing project button displays all the projects
projectsButton.addEventListener('click', () => {
    //main project tab
    projectPage.load();
});









