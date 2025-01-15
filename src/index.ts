import express from "express";
const app = express();

import bodyParser from 'body-parser';
const jsonParser = bodyParser.json();

import * as db from './db-connection';

// app.get('/suma/:valor1/:valor2', (req, res) => {
//     let resultado: number = 0;
//     resultado = Number(req.params.valor1) + Number(req.params.valor2);
//     console.log("resultado: " + resultado);
//     res.send(String(resultado));
// });

// app.get('/adios', (req, res) => {
//     console.log('Petición recibida al endpoint /adios');
//     res.send('Goodbye from express and typescript');
// });

// app.get('/futbolistas', async (req, res) => {
//     console.log('Petición recibida al endpoint GET /futbolistas');
//     try {
//         let db_response = await db.query("SELECT * FROM alumnos;");
//         console.log(db_response.rows);
//         res.json(db_response.rows);
//     } catch (err){
//         console.error(err);
//         res.status(500).send('Internal Server Error'); 
//     }
// });

// app.post('/futbolistas', jsonParser, async (req, res) => {
//     console.log(`Petición recibida al endpoint POST /futbolistas. 
//         Body:${JSON.stringify(req.body)}`);
//     try {
//         let query = `INSERT INTO alumnos (name, email, img) 
//         VALUES ('${req.body.name}', '${req.body.email}', '${req.body.img}');`;
//         console.log(query);
//         let db_response = await db.query(query);
//         console.log(db_response);
//         res.json("Registro guardado correctamente.");
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// });

app.get('/users', async (req, res) => {
    console.log('Petición recibida al endpoint GET /user');
    try {
        let db_response = await db.query("SELECT * FROM users;");
        console.log(db_response.rows);
        res.json(db_response.rows);
    } catch (err){
        console.error(err);
        res.status(500).send('Internal Server Error'); 
    }
});

app.post('/users', jsonParser, async (req, res) => {
    console.log(`Petición recibida al endpoint POST /users. 
        Body:${JSON.stringify(req.body)}`);
    try {
        let query = `INSERT INTO users (id, name, medals) 
        VALUES ('${req.body.id}', '${req.body.name}', '${req.body.medals}');`;
        console.log(query);
        let db_response = await db.query(query);
        console.log(db_response);
        res.json("Registro guardado correctamente.");
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => 
    console.log(`App listening on PORT ${port}.

    ENDPOINT:
    - GET  /users
    - POST /users`));