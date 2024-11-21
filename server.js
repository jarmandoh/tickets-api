const express = require('express');
const db = require('./app/config/db.config.js');

const helmet = require('helmet');
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')


const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: ['*'],
    optionsSuccessStatus: 200
}


app.use(helmet());
app.use(bodyParser.json({limit: '500mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
app.use(bodyParser.raw());
app.use(compression());

app.use(cors(corsOptions))

db.sequelize.sync({force: false}).then(() =>{
    console.log('Sincronizando...')
})

//LLAMADO A LAS RUTAS
require('./app/routes/users.routes.js')(app)
require('./app/routes/companies.routes.js')(app)

const server  = app.listen(port, ()=> {
    console.error("Servidor iniciado!!!")
})