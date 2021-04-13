import { TaskModel } from "../models/Task.js";
import { TaskDAO } from "../DAO/task-dao.js";

const route = "task";

const message = (msgText) =>{ return {
    message: msgText
}};

const taskController = (app, db) => {

    const taskDAO = new TaskDAO(db)

    app.get(`/${route}`, (req, res) => {
        taskDAO.listTasks()
        .then(result => res.send(result))
        .catch(error => res.send(message(error)));
    });

    // app.get(`/${route}/:title`, (req, res) => {
    //     res.send(db.tasks.filter(() => req.params.title));
    // });

    app.post(`/${route}`, (req, res) => {
        let task = new TaskModel(req.body)
        taskDAO.insertTasks(task)
        .then(result => res.send(result))
        .catch(error => res.send(message(error)));
    });

    app.delete(`/${route}/`, () => {

    });

    // app.put(`/${route}/:name`, (req, res) => {
    //     try{
    //         for(let user in db.users){
    //             if((db.users[user].name == req.params.name) && req.body.name && req.body.email && req.body.password){
    //                 console.log(`User found: ${db.users[user].name}`);
    //                 db.users[user] = req.body;
    //             }
    //         }
    //         res.send(message(`Put request at user ${req.params.name} fulfilled!`));
    //     }
    //     catch {
    //         res.send(message(`Put request failed.`));
    //     }
    // })
}

export default taskController;