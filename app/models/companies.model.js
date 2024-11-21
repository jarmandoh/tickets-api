module.exports = (sequelize, Sequelize) => {
    const Companies = sequelize.define( 'companies', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.TEXT
        },
        nit: {
            type: Sequelize.BIGINT
        },
        phone: {
            type: Sequelize.BIGINT
        },
        address: {
            type: Sequelize.TEXT
        },
        email: {
            type: Sequelize.STRING
        }
    },{
        tableName: 'companies',
        timestamps: false
    })
    return Companies;
}