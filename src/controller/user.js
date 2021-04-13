import { UserModel } from "../models/User.js";
import { UserDAO } from "../DAO/user-dao.js";

const route = "user";

const message = (msgText) =>{ return {
    message: msgText
}};

const userController = (app, db) => {

    const userDAO = new UserDAO(db)

    app.get(`/${route}`, (req, res) => {
        userDAO.listUsers()
        .then(result => res.send(result))
        .catch(error => res.send(message(error)));
    });

    // app.get(`/${route}/:email`, (req, res) => {
    //     res.send(db.users.filter(() => req.params.email));
    // });

    app.post(`/${route}`, (req, res) => {
        let user = new UserModel(req.body)
        userDAO.insertUsers(user)
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

export default userController;