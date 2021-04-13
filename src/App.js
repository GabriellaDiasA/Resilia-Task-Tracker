import userController from './controller/user.js';
import taskController from './controller/task.js';
import express from 'express';
import chalk from 'chalk';
import { db } from './database/db.js';

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

taskController(app, db);
userController(app, db);

app.listen(port, () => {
	console.log(chalk.green(`Example app listening at http://localhost:${port}`));
})