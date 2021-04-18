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
        let data = await userDAO.listUsers()
        .catch(e => res.send(message(e)));
        res.send(data);
    });

    app.post(`/${route}`, async (req, res) => {
        let user = new UserModel(req.body);
        let data = await userDAO.insertUsers(user)
        .catch(e => res.send(message(e)));
        res.send(data);
    });

    app.delete(`/${route}/:id`, async (req, res) => {
        let data = await userDAO.deleteUser(req.params.id)
        .catch(e => res.send(message(e)));
        res.send(message(data));
    });
}

export default userController;