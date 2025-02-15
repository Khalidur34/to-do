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
        let div = document.createElement("div");
        let form = document.createElement("form");
        form.classList.add("projectForm", "displayRight");
        form.appendChild(this.createFormField("Title", "text", "title"));
        form.appendChild(this.createFormField("Description", "textarea", "description"));
        form.appendChild(this.createSubmitButton());

        div.appendChild(form);
        return div;
    }

    createFormField(labelText, type, id) {
        let fieldDiv = document.createElement("div");

        let label = document.createElement("label");
        label.setAttribute("for", id);
        label.textContent = labelText;

        let input;
        if (type === "textarea") {
            input = document.createElement("textarea");
        } else {
            input = document.createElement("input");
            input.setAttribute("type", type);
        }
        
        input.setAttribute("id", id);
        input.setAttribute("name", id);
        input.required = true;

        fieldDiv.appendChild(label);
        fieldDiv.appendChild(input);

        return fieldDiv;
    }

    createSubmitButton() {
        let buttonDiv = document.createElement("div");

        let button = document.createElement("button");
        button.setAttribute("type", "submit");
        button.textContent = "Create";

        buttonDiv.appendChild(button);

        return buttonDiv;
    }

    deleteButton() {
        const deleteButton = this.uiComponent.actionButton("Delete");
        deleteButton.classList.add("deleteButton");
        return deleteButton;
    }
}