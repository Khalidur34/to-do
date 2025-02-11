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
}