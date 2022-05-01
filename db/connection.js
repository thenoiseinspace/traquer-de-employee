//basing this off of activity 11
// const express = require('express');
const mysql = require("mysql2");

// const PORT = process.env.PORT || 3001; 
// const app = express(); 

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "employees"
});

//basing this part on activity 22
connection.connect(function (err) {
  if (err){
      console.error(err);
  }
});

module.exports = connection;