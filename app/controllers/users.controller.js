const db = require('../config/db.config');
const User = db.Users

exports.Create = (req, res) => {
    const {id, username, password} = req.body.user
    User.create({
        id,
        username,
        password
    }).then( user => {
        res.json({
            status: 'ok',
            msg: 'Usuario creado satisfactoriamente!!!',
            data: user
        })
    }).catch(error => {
        console.error(error.detail)
        res.json({
            status: 'error',
            msg: 'Error al crear el usuario.'
        })
    })
}