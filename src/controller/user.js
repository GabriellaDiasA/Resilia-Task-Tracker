import { UserModel } from "../models/User.js";
import { UserDAO } from "../DAO/user-dao.js";

const route = "user";

const message = (msgText) =>{ return {
    message: msgText
}};

const userController = (app, db) => {

    const userDAO = new UserDAO(db)

    // O termo async deve ficar aqui e não no userController como um todo! Interessante...
    app.get(`/${route}`, async (req, res) => {
        try {
            let data = await userDAO.listUsers();
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    app.post(`/${route}`, async (req, res) => {
        try {
            let user = new UserModel(req.body);
            let data = await userDAO.insertUsers(user)
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    app.delete(`/${route}/:id`, async (req, res) => {
        try {
            let data = await userDAO.deleteUser(req.params.id)
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    });
}

export default userController;