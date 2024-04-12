const express = require("express");
const dataRouter = require("./Routes/data")

const PORT = 3002

const app = express();




app.use(express.json())


app.use("/api/data", dataRouter)







app.listen(PORT, ()=> console.log(`Server running on Port ${PORT}`))