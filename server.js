const express = require('express');
const db = require('./app/config/db.config.js');

const helmet = require('helmet');
const bodyParser = require('body-parser')
const compression = require('compression')

const app = express();
app.use(helmet());
app.use(bodyParser.json({limit: '500mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(bodyParser.raw());
app.use(compression());

db.sequelize.sync({force: false}).then(() =>{
    console.log('Sincronizando...')
})

//LLAMADO A LAS RUTAS
require('./app/routes/users.routes.js')(app)
require('./app/routes/companies.routes.js')(app)

const server  = app.listen(3000, ()=> {
    console.error("Servidor iniciado!!!")
})