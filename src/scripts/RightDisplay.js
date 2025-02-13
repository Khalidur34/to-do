export class RightDisplay {
    rightDisplay = document.querySelector("#displayCard");
    constructor() {}

    addContent(content) {
        this.rightDisplay.replaceChildren();
        this.rightDisplay.appendChild(content);
    }

    removeContent() {
        this.rightDisplay.replaceChildren();
    }
}