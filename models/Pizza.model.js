const { DataTypes } = require('sequelize')
const Database = require('../database/Config.database')

const PizzaModel = Database.define('pizza', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    size: DataTypes.ENUM("pequena", "media", "grande", "familia"),
})

module.exports = PizzaModel