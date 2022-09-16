const PizzaModel = require('../models/Pizza.model')

const PizzaController = {
    GetAll: async (isClient, isServer) => {
        const pizzas = await PizzaModel.findAll()

         isServer.status(200).json(pizzas)
    },
    GetById: async (isClient, isServer) => {
        const { id } = isClient.params
        const pizzaFound = await PizzaModel.findByPk(id)

        if(!pizzaFound) {
            isServer.status(404)
        }
        else {
            isServer.status(200).json(pizzaFound)
        }
    },
    Create: async (isClient, isServer) => {
        const { id, name, description, size} = isClient.body
        const newPizza = await PizzaModel.create(
            { id, name, description, size}
        ) 

        if(!newPizza) {
            isServer.status(400).json( {message: "Pizza can't created"} )
        } else {
            isServer.status(201).json(newPizza)
        }
    },
    UpdateById: async (isClient, isServer) => {
        const { id } = isClient.params
        const pizzaFound = await PizzaModel.findByPk(id)

        if(!pizzaFound) {
            isServer.status(400).json( {message: "Pizza can't updated"} )
        }
        else {
            pizzaFound.set(isClient)
            const pizzaUpdated = await pizzaFound.save()

            isServer.status(200).json(pizzaUpdated)
        }
    },
    DeleteById: async (isClient, isServer) => {
        const { id } = isClient.params
        const pizzaFound = await PizzaModel.findByPk(id)

        if(!pizzaFound) {
            isServer.status(400).json( {message: "Pizza can't deleted"} )
        }
        else {
            pizzaFound.destroy()

            isServer.status(200)
        }
    }
}

module.exports = PizzaController