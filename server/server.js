import express from "express"

const app = express()

// path = /login
// handle login logic
app.get("/login", (req, res) => {
    res.json({username: "Noen Andre"})
})

app.post("/login", (req, res) => {
    res.sendStatus(200)
})


app.listen(3000)