module.exports = (sequelize, Sequelize) => {
    const TicketStatus = sequelize.define( 'tickets_status', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        status: {
            type: Sequelize.TEXT
        }
    },{
        tableName: 'tickets_status',
        timestamps: false
    })
    return TicketStatus;
}