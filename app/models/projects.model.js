module.exports = (sequelize, Sequelize) => {
    const Projects = sequelize.define( 'projects', {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            unique: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.TEXT
        },
        company_id: {
            type: Sequelize.BIGINT
        }
    },{
        tableName: 'projects',
        timestamps: false
    })
    return Projects;
}