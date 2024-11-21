const db = require('../config/db.config');
const Companies = db.Companies

exports.getCompanies = (req, res) => {
    Companies.findAll({
        
    }).then( user => {
        res.json({
            status: 'ok',
            msg: 'Compañías listadas correctamente',
            data: user
        })
    }).catch(error => {
        console.error(error.detail)
        res.json({
            status: 'error',
            msg: 'Error al listar compañías.'
        })
    })
}