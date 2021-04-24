import { TaskModel } from "../models/Task.js";
import { TaskDAO } from "../DAO/task-dao.js";

const route = "task";

const message = (msgText) =>{ return {
    message: msgText
}};

const taskController = (app, db) => {

    const taskDAO = new TaskDAO(db)

    //List all Tasks
    app.get(`/${route}/`, async (req, res) => {
        try {
            let data = await taskDAO.listAllTasks();
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    //List Tasks by User ID
    app.get(`/${route}/:id_user`, async (req, res) => {
        try {
            let data = await taskDAO.listTasksByID(req.params.id_user);
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    //List task by ID
    app.get(`/${route}/:id`, async (req, res) => {
        try {
            let data = await taskDAO.listTaskByID(req.params.id);
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    })

    //Post new Task
    app.post(`/${route}`, async (req, res) => {
        try {            
            let task = new TaskModel(req.body);
            let data = await taskDAO.insertTasks(task);
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    //Delete Task by ID
    app.delete(`/${route}/:id`, async (req, res) => {
        try {
            let data = await taskDAO.deleteTask(req.params.id);
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    });

    app.put(`/${route}/:id`, async (req, res) => {
        try {
            let task = new TaskModel(req.body);
            let data = await taskDAO.updateTask(req.params.id, task);
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    })
}

export default taskController;