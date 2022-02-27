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


const server = app.listen(process.env.PORT || 3000, ()=> {
    console.log(`Server listening on http://localhost:${server.address().port}`)
})