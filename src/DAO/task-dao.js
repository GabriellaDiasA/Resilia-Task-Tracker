export class TaskDAO{
    constructor(db){
        this.db = db;
    }

    listTasks(){
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.all(
                    "SELECT * FROM TASKS",
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
            if (this.db && task.title && task.description && task.status) {
                this.db.run(
                    "INSERT INTO TASKS (TITLE, DESCRIPTION, STATUS, DATE) VALUES (?, ?, ?, ?)",
                    [task.title, task.description, task.status, task.date],
                    e => {
                        if (e) {
                            throw new Error(`Erro ao inserir: ${e}`);
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

}