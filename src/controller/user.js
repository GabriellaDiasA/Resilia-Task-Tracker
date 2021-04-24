import { UserModel } from "../models/User.js";
import { UserDAO } from "../DAO/user-dao.js";

const route = "user";

const message = (msgText) =>{ return {
    message: msgText
}};

const userController = (app, db) => {

    const userDAO = new UserDAO(db)

    //List all users
    app.get(`/${route}`, async (req, res) => {
        try {
            let data = await userDAO.listAllUsers();
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    //List user by ID
    app.get(`/${route}/:id`, async (req, res) => {
        try {
            let data = await userDAO.listUserByID(req.params.id)
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    });

    //Post new user
    app.post(`/${route}`, async (req, res) => {
        try {
            let user = new UserModel(req.body);
            let data = await userDAO.insertUsers(user)
            res.send(data);
        } catch (e) {
            res.send(message(e));
        }
    });

    //Delete user by ID
    app.delete(`/${route}/:id`, async (req, res) => {
        try {
            let data = await userDAO.deleteUser(req.params.id)
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    });

    //Update user by ID
    app.put(`/${route}/:id`, async (req, res) => {
        try {
            let user = new UserModel(req.body);
            let data = await userDAO.updateUser(req.params.id, user);
            res.send(message(data));
        } catch (e) {
            res.send(message(e));
        }
    });
}

export default userController;