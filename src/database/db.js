import sqlite3 from 'sqlite3';

sqlite3.verbose();
export let db = new sqlite3.Database('./database.db');

// export let db = {
//     users: [],
//     tasks: []
// };