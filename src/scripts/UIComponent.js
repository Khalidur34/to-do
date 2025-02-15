export class UIComponent {
    constructor() {
    }

    actionButton(buttonContent) {
        const button = this.button();
        button.textContent = buttonContent;
        return button;
    }

    plusButton() {
        const button = this.button();
        button.classList.add("card");
        button.textContent = "+";
        return button;
    }

    smallCard(title, description, buttonValue) {
        const div = this.div();
        div.classList.add("card");
        const name = document.createElement("h2");
        name.textContent = title;
        const details = document.createElement("p");
        details.textContent = description;
        const button = this.button();
        button.classList.add("detailButton");
        button.setAttribute("clicked", "false");
        button.textContent = "..."; 
        button.value = buttonValue;
        div.appendChild(name);
        div.appendChild(details);
        div.appendChild(button);
        return div;
    }

    bigCard(title, description) {
        const div = this.div();
        const name = document.createElement("h2");
        const details =  document.createElement("p");
        name.textContent = title;
        details.textContent = description;
        div.appendChild(name);
        div.appendChild(details);
        div.classList.add("detailedCard");
        return div;
    }

    

    button() {
        const button = document.createElement("button");
        return button;
    }

    div() {
        const div = document.createElement("div");
        return div;
    }
}