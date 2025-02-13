export class MainDisplay {
    mainDisplay = document.querySelector("#content");
    constructor() {}

    addContent(content) {
        this.mainDisplay.replaceChildren();
        this.mainDisplay.appendChild(content);
    }

    removeContent() {
        this.mainDisplay.replaceChildren();
    }
}