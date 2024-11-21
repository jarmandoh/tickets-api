module.exports = (sequelize, Sequelize) => {
    const Tickets = sequelize.define( 'tickets', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        comments: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        status_id: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        user_story_id: {
            type: Sequelize.BIGINT,
            allowNull: false
        }
        
    },{
        tableName: 'tickets',
        timestamps: false
    })
    return Tickets;
}