const PizzaController = {
    GetAll: (isClient, isServer) => {
         isServer.status(200).json([])
    },
    GetById: (isClient, isServer) => {
        isServer.status(200).json([])
    },
    Create: (isClient, isServer) => {
        isServer.status(201).json([])
    },
    UpdateById: (isClient, isServer) => {
        isServer.status(200).json([])
    },
    DeleteById: (isClient, isServer) => {
        isServer.status(202).json(null)
    }
}

module.exports = PizzaController