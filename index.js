const express = require('express')
const blogRouter = require('./route/data')
const cors = require("cors")
const port = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use("/api",blogRouter)


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

