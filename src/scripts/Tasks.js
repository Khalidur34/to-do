import axios from "axios";
const rootURL = 'https://xtzdwksy73.execute-api.us-east-1.amazonaws.com';
export class Tasks {
    tasks = [];
    constructor() {};

    allTasks() {
        let allTasks = JSON.parse(localStorage.getItem("tasks"))
        if(allTasks == null) {
            return this.tasks;
        }
        return allTasks;
    }

    addTask(task) {
        this.tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        //post()
        console.log(task)
        

        axios.post(rootURL + '/task', {
            title: task.title,
            body: task.description,
            dueDate: task.dueDate,
            priority: task.priority
          }, {
            headers : {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('authToken')
            }
          }
        )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    removeTask(task) {
        const index = this.tasks.findIndex(e => e.title === task.title);
        if(index != -1) {
            this.tasks.splice(index, 1);
        }
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}