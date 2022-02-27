import express from "express"

const app = express()

/**
 *  /login
 * */
app.get("/login", (req, res) => {
    res.json({username: "Noen Andre"})
})

app.post("/login", (req, res) => {
    res.sendStatus(200)
})


app.listen(3000)