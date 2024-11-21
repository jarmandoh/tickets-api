//Render
const env = {
    host: "dpg-csvnqrl6l47c73dp1o1g-a.oregon-postgres.render.com",
    database: "tickets_s7a5",
    username: "jherodev",
    password: "HcCItwCN36SBmrAldQ5Sh4nUErccb338",
    dialect: "postgres",
    dialectOptions: {
        ssl: true
    }
}

module.exports = env;

/* 
// despliegue local
const env = {
    host: "localhost",
    database: "proyecto_tickets",
    username: "postgres",
    password: "posjhero",
    dialect: "postgres",
    timezone: "-05:00"
}

module.exports = env; */