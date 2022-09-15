const Express = require('express')
const WebApi = new Express()

const PizzaRouter = require('./routers/Pizza.Router')

WebApi.use(Express.json())
WebApi.use(Express.urlencoded({ extended: false }))

WebApi.use("/", PizzaRouter)

WebApi.listen(
    process.env.PORT || 3030, () => console.log(
        `Running Server in: https://localhost:${process.env.PORT || 3030}`
        )
)