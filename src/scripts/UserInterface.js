import { UIComponent } from "./UIComponent";

export class UserInterface {
    uiComponent = new UIComponent();
    constructor() {
        
    }

    divProjects(projects) {
        const div = this.uiComponent.div();
        projects.forEach((project,index) => {
            let projectDiv = this.divProjectCard(project, index);
            div.appendChild(projectDiv);
        });
        div.appendChild(this.divAddTaskOrProject());

        return div;
    }

    displayProjectDetails(targetProject) {
        const div = this.uiComponent.bigCard(targetProject.title, targetProject.description);
        const task = document.createElement("p");
        task.textContent = "Tasks:"
        div.appendChild(task);

        const projectTasks = targetProject.getTasks();
        projectTasks.forEach(task => {
            const button = this.uiComponent.button();
            button.textContent = task.title;
            div.appendChild(button);
        });

        const secondDiv = this.uiComponent.div();
        const addNewTaskButton = this.uiComponent.actionButton("Add Task");
        const deleteButton = this.deleteButton();
        addNewTaskButton.classList.add("addTask", "heroButton");
        deleteButton.value = targetProject;      
        secondDiv.append(addNewTaskButton, deleteButton);
        div.appendChild(secondDiv);

        return div;
    }

    divTasks(tasks) {
        let div = document.createElement("div");
        tasks.forEach((task, index) => {
            let taskDiv = this.divTaskCard(task, index);
            div.appendChild(taskDiv);
        });
        div.appendChild(this.divAddTaskOrProject());
        
        return div;
    }

    displayTaskDetails(targetTask) {
        const div = this.uiComponent.bigCard(targetTask.title, targetTask.description);
        let dueDate = document.createElement("p");
        let priority = document.createElement("p");
        dueDate.textContent = targetTask.dueDate;
        priority.textContent = "Priority: " + targetTask.priority.toUpperCase();
        div.append(dueDate, priority, this.deleteButton());

        return div;
    }

    divProjectCard(project, index) {
        const card = this.uiComponent.smallCard(project.getTitle(), project.getDescription(), index);
        return card;
    }

    divTaskCard(task, index) {
        const card = this.uiComponent.smallCard(task.title, task.description, index);
        switch(task.priority) {
            case "high":
                card.style.borderLeft = '1rem solid red';
                break;
            case "medium":               
                card.style.borderLeft = '1rem solid yellow';
                break;
            case "low":
                card.style.borderLeft = '1rem solid green';
                break;
            default:
        }
        return card; 
    }

    divAddTaskOrProject() {
        let button = document.createElement("button");
        button.classList.add("addButton", "card");
        button.textContent = "+";
        return button;
    }

    createProjectFormDiv() {
        const div = this.uiComponent.div();
        const form = document.createElement("form");
        form.classList.add("projectForm", "displayRight");
        form.appendChild(this.uiComponent.formFieldTypeInput("text", "title", "Title"));
        form.appendChild(this.uiComponent.formFieldTypeTextArea("description", "Description"));
        form.appendChild(this.uiComponent.formFieldTypeInput("submit", "submit", ""));
        div.appendChild(form);
        return div;
    }

    createTaskFormDiv() {
        const div = this.uiComponent.div();
        const form = document.createElement("form");
        form.classList.add("displayRight");
        form.appendChild(this.uiComponent.formFieldTypeInput("text", "title", "Title"));
        form.appendChild(this.uiComponent.formFieldTypeTextArea("description", "Description"));
        form.appendChild(this.uiComponent.formFieldTypeInput("date", "dueDate", "Due Date"));
        const div2 = this.uiComponent.div();
        div2.appendChild(this.uiComponent.formFieldTypeInput("radio", "priority", "High"));
        div2.appendChild(this.uiComponent.formFieldTypeInput("radio", "priority", "Medium"));
        div2.appendChild(this.uiComponent.formFieldTypeInput("radio", "priority", "Low"));
        form.appendChild(div2);
        form.appendChild(this.uiComponent.formFieldTypeInput("submit", "submit", ""))
        div.appendChild(form);
        return div;
    }

    deleteButton() {
        const deleteButton = this.uiComponent.actionButton("Done");
        deleteButton.classList.add("deleteButton", "heroButton");
        return deleteButton;
    }
}