// lib/db.js
import sql from "mssql";

const connect = async () => {
  try {
    await sql.connect({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: process.env.DB_SERVER,
      database: process.env.DB_DATABASE,
      options: {
        encrypt: true,
        trustServerCertificate: false,
      },
    });
    console.log("SQL Server connection pool created.");
  } catch (error) {
    console.error("Error creating SQL Server connection pool:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

const query = async (sqlQuery, params = []) => {
  try {
    const pool = await sql.connect();
    const result = await pool.request().query(sqlQuery, params);
    return result.recordset;
  } catch (error) {
    console.error("Error executing SQL query:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
};

export { connect, query };
