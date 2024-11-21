module.exports = (app) => {
    const users = require('../controllers/users.controller');

    app.post('/api/v1/users', users.Create)
}