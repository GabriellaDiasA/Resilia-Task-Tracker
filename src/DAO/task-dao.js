export class TaskDAO{
    constructor(db){
        this.db = db;
    }

    listTasks(id_user){
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.all(
                    "SELECT * FROM TASKS WHERE ID_USER = ?",
                    [id_user],
                    (e, tasks) => {
                        if (e) {
                            throw new Error(`Error GET: ${e}`);
                        } else {
                            resolve(tasks);
                        }
                    }
                )
            } else {
                reject("Something went wrong with the database!");
            }
        })
    }

    insertTasks(task){
        return new Promise((resolve, reject) => {
            if (this.db && task.title && task.description && task.status && task.id_user) {
                this.db.run(
                    "INSERT INTO TASKS (TITLE, DESCRIPTION, STATUS, DATE, ID_USER) VALUES (?, ?, ?, ?, ?)",
                    [task.title, task.description, task.status, task.date, task.id_user],
                    e => {
                        if (e) {
                            throw new Error(`Insertion error: ${e}`);
                        } else {
                            resolve(task);
                        }
                    }
                )
            } else {
                reject("Something went wrong!");
            }
        })
    }

    deleteTask(id){
        return new Promise((resolve, reject) => {
            id = parseInt(id);
            if (typeof id == "number"){
                this.db.run(
                    "DELETE FROM TASKS WHERE TASKS.ID=?",
                    [id],
                    e => {
                        if (e) {
                            console.log("in Error");
                            throw new Error(`Deletion error: ${e}`);
                        } else {
                            resolve(`Task with ID ${id} successfully deleted.`);
                        }
                    }
                )
            } else {
                reject(`Invalid ID`);
            }
        })
    }

}