module.exports = (app) => {
    const companies = require('../controllers/companies.controller');

    app.get('/api/v1/companies', companies.getCompanies)
}