// comando para dependencias:
// npm i nodemon express mongoose express-handlebars socket.io passport passport-jwt mongoose-paginate-v2 bcrypt dotenv commander cors cookie-parser express-session sweetalert2 swagger-jsdoc swagger-ui-express

// Imports:
const express = require('express');
const mongoose = require('mongoose');
const exphbs = require("express-handlebars");
const cors = require("cors");
/*Por ahora no se utilizan
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require("express-session");
*/

//Import modules: 
const apiRouter = require("./routes/api.router.js");

// Server, puerto y conexion a la BD
const app = express();
const PUERTO = 8080;
require("./database.js");

// Middlewares:
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"));
app.use(cors());
/*Por ahora no se utilizan
app.use(cookieParser());
app.use(passport.initialize());
app.use(session({
    secret:"secretCoder",
    resave: true, 
    saveUninitialized:true,   
}))
initializePassport();
*/

// Handlebars
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");


// Routes
app.get("/", (req, res) => {

    try {
        
        res
    } catch (error) {
       console.log("Error en el servidor: " + error);
       res.status(500); 
    }
 
    res.render("home");
});

app.use("/api", apiRouter);


// Listen
const httpServer = app.listen(PUERTO, () => {

    console.log('Escuchando puerto: ' + PUERTO);
})
