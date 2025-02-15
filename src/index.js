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
import { TaskPage } from "./scripts/TaskPage";

const bodyContent = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const projectsButton = document.querySelector(".projects");

const projects = new Projects();
const mainDislay = new MainDisplay();
const rightDisplay = new RightDisplay();
const tasks = new Tasks();
const projectPage = new ProjectPage(projects, mainDislay, rightDisplay);
const taskPage = new TaskPage(tasks, mainDislay, rightDisplay);
const sampleTask = new Task("title", "myDescription", "Tomorrow", "low");
const sampleProject = new Project("My Project", "Lorem Ipsum", tasks.allTasks());
projects.addProject(sampleProject);
tasks.addTask(sampleTask);

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









