require('dotenv').config
const { Sequelize } = require('sequelize')

const configConnection = new Sequelize('pizzaria', process.env.DATABASE_USER, process.env.DABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    configConnection.authenticate()
    configConnection.sync()
    console.log('Connection Sucess')
}
catch (err) {
    console.log('Connection Failed', err)
}

module.exports = configConnection