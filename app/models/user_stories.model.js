module.exports = (sequelize, Sequelize) => {
    const UserStories = sequelize.define( 'user_stories', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        description: {
            type: Sequelize.TEXT
        },
        id_project: {
            type: Sequelize.BIGINT
        }
    },{
        tableName: 'user_stories',
        timestamps: false
    })
    return UserStories;
}