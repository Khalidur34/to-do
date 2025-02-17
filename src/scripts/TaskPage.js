import { Task } from "./Task";
import { UserInterface } from "./UserInterface";

export class TaskPage {
    tasks;
    mainDisplay;
    rightDisplay;
    ui = new UserInterface();

    constructor(tasks, mainDisplay, rightDisplay) {
        this.tasks = tasks;
        this.mainDisplay = mainDisplay;
        this.rightDisplay = rightDisplay;
    }

    load() {
        this.loadTasks();
        this.addNewTaskButtonListener();
        this.taskDetailButtonListener();
    }

    loadTasks() {
        let tasksDiv = this.ui.divTasks(this.tasks.allTasks()); 
        this.rightDisplay.removeContent();
        this.mainDisplay.addContent(tasksDiv);
    }

    addNewTaskButtonListener = () => {
        const addTaskButton = document.querySelector(".addTaskButton");
        addTaskButton.addEventListener('click', () => this.displayTaskCreationForm());
    }

    displayTaskCreationForm = () => {
        const createTaskFormDiv = this.ui.createTaskFormDiv();
        this.rightDisplay.addContent(createTaskFormDiv);
        this.taskFormSubmissionHandler(createTaskFormDiv);
    }

    taskFormSubmissionHandler = (div) => {
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
            this.rightDisplay.removeContent();
            this.load();
        });
    };

    taskDetailButtonListener() {
        const taskDetailButtons = document.querySelectorAll(".detailButton");
        taskDetailButtons.forEach(button => {
            this.addDisplayTaskButtonListener(button);
        });
    }

    addDisplayTaskButtonListener(button) {
        button.addEventListener('click', () => {
            if(button.getAttribute("clicked") === "false") {
                this.displayTaskDetails(button);
                button.setAttribute("clicked", "true");
            }
            else {
                this.rightDisplay.removeContent();
                button.setAttribute("clicked", "false");
            }
        });
    }

    displayTaskDetails(button) {
        let targetTask = this.tasks.allTasks()[button.value];
        this.rightDisplay.addContent(this.ui.displayTaskDetails(targetTask));
        this.deleteTask(button.value);
    }

    deleteTask(taskIndex) {
        const deleteButton = document.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            this.rightDisplay.removeContent();
            this.tasks.allTasks().splice(taskIndex, 1);
            this.load();
        }); 
    }

}