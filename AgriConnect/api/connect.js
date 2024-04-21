import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"Abhyuday@ac",
  database:"agriconnect"
})