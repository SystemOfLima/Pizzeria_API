const Express = require("express")
const PizzaRouter = Express.Router()

const { 
    GetAll, 
    GetById, 
    UpdateById, 
    DeleteById, 
    Create 
} = require('../controllers/Pizza.Controller')

PizzaRouter.get('/', GetAll)

PizzaRouter.post('/', Create)

PizzaRouter.get('/:id', GetById)

PizzaRouter.patch('/:id', UpdateById)

PizzaRouter.delete('/:id', DeleteById)

module.exports = PizzaRouter