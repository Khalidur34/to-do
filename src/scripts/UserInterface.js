export class UserInterface {

    constructor() {
        
    }

    divProjects(projects) {
        let div = document.createElement("div");
        projects.forEach((project,index) => {
            let projectDiv = this.divProjectCard(project, index);
            div.appendChild(projectDiv);
        });
        div.appendChild(this.divAddProjectCard());

        return div;
    }

    displayProjectDetails(targetProject) {
        let div = document.createElement("div");
        let title = document.createElement("h2");
        let description = document.createElement("p");
        let task = document.createElement("p");

        div.classList.add("detailedCard", "projectDetail");

        title.textContent = targetProject.getTitle();
        description.textContent = targetProject.getDescription();
        let projectTasks = targetProject.getTasks();

        div.appendChild(title);
        div.appendChild(description);
        div.appendChild(task);

        projectTasks.forEach(task => {
            let button = document.createElement("button");
            button.textContent = task.getTitle();
            div.appendChild(button);
        });

        return div;
    }

    divTasks(tasks) {
        let div = document.createElement("div");
        tasks.forEach(task => {
            let taskDiv = this.divTaskCard(task.getTitle(), task.getPriority());
            div.appendChild(taskDiv);
        });
        return div;
    }

    divProjectCard(project, index) {
        // console.log(project);
        // console.log(index);
        let div = document.createElement("div");
        div.classList.add("projectCard", "card");
        let name = document.createElement("h2");
        name.textContent = project.getTitle();
        let button = document.createElement("button");
        button.classList.add("projectButton");
        button.value = index;
        button.setAttribute("clicked", "false");
        button.textContent = "..."; 
        div.appendChild(name);
        div.appendChild(button);
        return div;
    }

    divTaskCard(nameCard, priority) {
        let div = document.createElement("div");
        div.classList.add("taskCard", "card");
        let name = document.createElement("h2");
        name.textContent = nameCard;
        let button = document.createElement("button");
        button.classList.add("taskButton");
        button.textContent = "...";
        div.appendChild(name);
        div.appendChild(button);
        div.style.borderLeft = "1rem solid red";
        return div; 
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
}