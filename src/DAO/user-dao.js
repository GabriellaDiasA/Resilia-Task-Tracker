export class UserDAO{
    constructor(db){
        this.db = db;
    }

    listUsers(){
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.all(
                    "SELECT * FROM USERS",
                    (e, users) => {
                        if (e) {
                            throw new Error(`Error GET: ${e}`);
                        } else {
                            resolve(users);
                        }
                    }
                )
            } else {
                reject("Something went wrong with the database!");
            }
        })
    }

    insertUsers(user){
        return new Promise((resolve, reject) => {
            if (this.db && user.name && user.email && user.password) {
                this.db.run(
                    "INSERT INTO USERS (NAME, EMAIL, PASSWORD) VALUES (?, ?, ?)",
                    [user.name, user.email, user.password],
                    e => {
                        if (e) {
                            throw new Error(`Erro ao inserir: ${e}`);
                        } else {
                            resolve(user);
                        }
                    }
                )
            } else {
                reject("Something went wrong!");
            }
        })
    }

    deleteUser(id){
        return new Promise((resolve, reject) => {
            id = parseInt(id);
            if (typeof id == "number"){
                this.db.run(
                    "DELETE FROM USERS WHERE USERS.ID=?",
                    [id],
                    e => {
                        if (e) {
                            console.log("in Error");
                            throw new Error(`Deletion error: ${e}`);
                        } else {
                            resolve(`User with ID ${id} successfully deleted.`);
                        }
                    }
                )
            } else {
                reject(`Invalid ID`);
            }
        })
    }
}