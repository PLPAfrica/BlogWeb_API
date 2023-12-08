const express = require("express")

const app = express()


// MIDDLEWARES

app.use("/posts", () => {
    //  Middle wares logic
})


// ROUTES
app.get("/", (req, res) => {
    res.send("This is awesome")
})


app.listen(3001)