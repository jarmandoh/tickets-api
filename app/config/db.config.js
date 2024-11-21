const env = require('./env.js')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    ssl: true
})

const db = {}
db.Sequelize = Sequelize,
db.sequelize = sequelize

//Models
db.Companies = require('../models/companies.model.js')(sequelize, Sequelize);
db.Projects = require('../models/projects.model.js')(sequelize, Sequelize);
db.Tickets = require('../models/tickets.model.js')(sequelize, Sequelize);
db.UserStories = require('../models/user_stories.model.js')(sequelize, Sequelize);
db.Users = require('../models/users.model.js')(sequelize, Sequelize);


db.TicketsStatus = require('../models/tickets_status.model.js')(sequelize, Sequelize);




module.exports = db;