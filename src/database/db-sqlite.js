import sqlite3 from 'sqlite3';
sqlite3.verbose();

let bd = new sqlite3.Database('./database.db');

//Processamento de sinal
process.on('SIGINT', () =>
    bd.close(() => {
        console.log('BD encerrado!');
        process.exit(0);
    })
);

export default bd;