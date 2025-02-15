import { MainDisplay } from "./MainDisplay";
import { RightDisplay } from "./RightDisplay";
import { Tasks } from "./Tasks";
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
        this.taskDetailButtonListener();
    }

    loadTasks() {
        let tasksDiv = this.ui.divTasks(this.tasks.allTasks()); 
        this.rightDisplay.removeContent();
        this.mainDisplay.addContent(tasksDiv);
    }
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
        console.log(targetTask);
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