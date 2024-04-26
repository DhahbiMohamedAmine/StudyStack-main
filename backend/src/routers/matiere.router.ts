// users.router.js
import {db} from "../server";
const express = require('express');
const router = express.Router();
const pool = require('../server');

router.get("/", (req:any, res:any)=> {

  let sql ='select * from matiere';
  db.query(sql,(err:any,result:any)=>{
   if (err) throw err;
   res.send(result)
  });

});
router.get("/:id", (req:any, res:any)=> {
 
   const id=req.params.id;
  let sql ='select * from users where id='+id;
  db.query(sql,(err:any,result:any)=>{
   if (err) throw err;
   res.send(result)
  });

});
router.get("/email/:email", (req:any, res:any)=> {
 
  const email=req.params.email;
 let sql ='select * from users where email='+"'"+email+"'";
 db.query(sql,(err:any,result:any)=>{
  if (err) throw err;
  else
   { if (result.length > 0) {
      res.send(result[0]); // Envoyez les détails du premier utilisateur trouvé
    } else {
      res.status(404).send("User not found");
    }
  }})
});
router.post("/", (req:any, res:any) => {
  const { fullname, email, password, mobile, type} = req.body; // Récupérez les données du formulaire

  // Insérez les données de l'utilisateur dans la base de données
  let sql = 'INSERT INTO users (fullname, email, password, mobile, type) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [fullname, email, password, mobile, type], (err:any, result:any) => {
    if (err) {
      console.error("Error during signup:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("User signed up successfully:", result);
      res.status(200).send("Signup successful");
    }
  });
});


// Autres routes pour les opérations CRUD sur les utilisateurs
export default router;
