// lib/db.js
import mysql from "mysql";

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const connect = async () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting MySQL connection:", err);
        return reject(err);
      }
      connection.release();
      resolve();
    });
  });
};

const query = async (sqlQuery, params = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        console.error("Error getting MySQL connection:", err);
        return reject(err);
      }

      connection.query(sqlQuery, params, (error, results, fields) => {
        connection.release();
        if (error) {
          console.error("Error executing MySQL query:", error);
          return reject(error);
        }
        resolve(results);
      });
    });
  });
};

export { connect, query };
