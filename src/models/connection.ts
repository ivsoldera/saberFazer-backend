import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

export default mysql.createPool({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE 
})