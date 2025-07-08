import mysql from "mysql2/promise";

  const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "4231",
    database: "dripstore",
    port: 3306
  });

export default connection
