const express=require('express');
import cors from 'cors';
import { createConnection } from 'mysql2/promise';
import usersRouter from './routers/users.router';
import matiereRouter from './routers/matiere.router';
const mysql=require('mysql');
export const db =mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'studystack'
});

db.connect((err:any)=>
{
  if(err)
  {
    throw err;
  }
  console.log('Mysql Connected ..');
})
const app=express();
app.use(express.json(),cors(),(req:any, res:any, next:any) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use("/users",usersRouter)
app.use("/matiere",matiereRouter)

app.listen('3000',()=>{
  console.log('Server started on port 3000');
})