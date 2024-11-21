module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define( 'users', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
        },
        username: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        company_id: {
            type: Sequelize.BIGINT,
            allowNull: true
        }
    },{
        tableName: 'users',
        timestamps: false
    })
    return User;
}