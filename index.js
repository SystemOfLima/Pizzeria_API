import express from "express"
import dotenv from "dotenv"

dotenv.config()

const WebService = express()




WebApi.listen(
    process.env.PORT || 3030,
    () => console.log(
        `Running Server in Localhost: 
            ${process.env.PORT || 3030}
    `)
)