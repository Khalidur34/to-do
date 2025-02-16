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
        div.appendChild(this.divAddProjectCard());

        return div;
    }

    displayProjectDetails(targetProject) {
        const div = this.uiComponent.bigCard(targetProject.getTitle(), targetProject.getDescription());
        const task = document.createElement("p");
        task.textContent = "Tasks:"
        div.appendChild(task);

        const projectTasks = targetProject.getTasks();
        projectTasks.forEach(task => {
            const button = this.uiComponent.button();
            button.textContent = task.getTitle();
            div.appendChild(button);
        });

        const secondDiv = this.uiComponent.div();
        const addNewTaskButton = this.uiComponent.actionButton("Add Task");
        addNewTaskButton.classList.add("addTask");       
        secondDiv.appendChild(addNewTaskButton);
        secondDiv.appendChild(this.deleteButton());

        div.appendChild(secondDiv);

        return div;
    }

    divTasks(tasks) {
        let div = document.createElement("div");
        tasks.forEach((task, index) => {
            let taskDiv = this.divTaskCard(task, index);
            div.appendChild(taskDiv);
        });
        return div;
    }

    displayTaskDetails(targetTask) {
        const div = this.uiComponent.bigCard(targetTask.getTitle(), targetTask.getDescription());
        let dueDate = document.createElement("p");
        let priority = document.createElement("p");
        dueDate.textContent = targetTask.getDueDate();
        priority.textContent = targetTask.getPriority();
        div.appendChild(dueDate);
        div.appendChild(priority);  
        div.appendChild(this.deleteButton());

        return div;
    }

    divProjectCard(project, index) {
        const card = this.uiComponent.smallCard(project.getTitle(), project.getDescription(), index);
        return card;
    }

    divTaskCard(task, index) {
        const card = this.uiComponent.smallCard(task.getTitle(), task.getDescription(), index);
        switch(task.getPriority()) {
            case "high":
                card.style.borderLeft = '1rem solid red';
            case "medium":
                card.style.borderLeft = '1rem solid yellow';
            case "low":
                card.style.borderLeft = '1rem solid green';
        }
        return card; 
    }

    divAddProjectCard() {
        let button = document.createElement("button");
        button.classList.add("addProjectButtonCard", "card");
        button.textContent = "+";
        return button;
    }

    createProjectFormDiv() {
        const div = this.uiComponent.div();
        const form = document.createElement("form");
        form.classList.add("projectForm", "displayRight");
        form.appendChild(this.uiComponent.formFieldTypeInput("text", "title", "Title"));
        form.appendChild(this.uiComponent.formFieldTypeTextArea("description", "Description"));
        form.appendChild(this.createSubmitButton());
        div.appendChild(form);
        return div;
    }

    createTaskFormDiv() {
        const div = this.uiComponent.div();
        const form = document.createElement("form");
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

    createSubmitButton() {
        let buttonDiv = document.createElement("div");

        let button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.textContent = "  Create";

        buttonDiv.appendChild(button);

        return buttonDiv;
    }

    deleteButton() {
        const deleteButton = this.uiComponent.actionButton("Delete");
        deleteButton.classList.add("deleteButton");
        return deleteButton;
    }
}