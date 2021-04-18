import { TaskModel } from "../models/Task.js";
import { TaskDAO } from "../DAO/task-dao.js";

const route = "task";

const message = (msgText) =>{ return {
    message: msgText
}};

const taskController = (app, db) => {

    const taskDAO = new TaskDAO(db)

    app.get(`/${route}`, async (req, res) => {
        let data = await taskDAO.listTasks()
        .catch(e => res.send(message(e)));
        res.send(data);
    });

    app.post(`/${route}`, async (req, res) => {
        let task = new TaskModel(req.body)
        let data = await taskDAO.insertTasks(task)
        .catch(e => res.send(message(e)));
        res.send(data);
    });

    app.delete(`/${route}/:id`, async (req, res) => {
        let data = await taskDAO.deleteTask(req.params.id)
        .catch(e => res.send(message(e)));
        res.send(message(data));
    });
}

export default taskController;