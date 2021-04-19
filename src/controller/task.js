import { TaskModel } from "../models/Task.js";
import { TaskDAO } from "../DAO/task-dao.js";

const route = "task";

const message = (msgText) =>{ return {
    message: msgText
}};

const taskController = (app, db) => {

    const taskDAO = new TaskDAO(db)

    app.get(`/${route}/:id_user`, async (req, res) => {
        try {
            let data = await taskDAO.listTasks(req.params.id_user)
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    app.post(`/${route}`, async (req, res) => {
        try {            
            let task = new TaskModel(req.body)
            let data = await taskDAO.insertTasks(task)
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    app.delete(`/${route}/:id`, async (req, res) => {
        try {
            let data = await taskDAO.deleteTask(req.params.id)
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    });
}

export default taskController;