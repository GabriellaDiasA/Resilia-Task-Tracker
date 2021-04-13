import sqlite3 from 'sqlite3';
let db = new sqlite3.Database('./database.db');


/*
 * Users
 */

const USERS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "USERS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NAME" varchar(64),
    "EMAIL" varchar(64),
    "PASSWORD" varchar(64)
  );`;

const ADD_USERS_DATA = `
INSERT INTO USERS (ID, NAME, EMAIL, PASSWORD)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`

function createTableUsers() {
    db.run(USERS_SCHEMA, (error)=> {
       if (error) console.log("Error creating Users table");
    });
}


function populateTableUsers() {
    db.run(ADD_USERS_DATA, (error)=> {
       if (error) console.log("Error populating Users table");
    });
}


/*
 * Tasks 
 */

const TASKS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "TASKS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "TITLE" VARCHAR(64),
    "DESCRIPTION" TEXT,
    "STATUS" VARCHAR(32),
    "DATE" VARCHAR(32),
    "ID_USER" INTEGER,
    FOREIGN KEY(ID_USER) REFERENCES USERS(ID)
);`;

const ADD_TASKS_DATA = `INSERT INTO TASKS (TITLE, DESCRIPTION, STATUS, DATE, ID_USER)
VALUES 
       ('Yoga', 'Fazer yoga segunda e quarta', 'CONTINUOUS', '2021-01-10', 2),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
       ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
       ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
       ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
       ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'CONTINUOUS', '2021-01-05', 3)
`

function createTableTasks() {
    db.run(TASKS_SCHEMA, (error)=> {
        if (error) console.log("Error creating Tasks table");
    });
}

function populateTableTasks() {
    db.run(ADD_TASKS_DATA, (error)=> {
       if (error) console.log("Error populating Tasks table");
    });
}

/**
 * Execution
 */

db.serialize( ()=> {
    createTableUsers();
    populateTableUsers();
    createTableTasks();
    populateTableTasks();
});