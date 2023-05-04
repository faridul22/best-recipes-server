const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefs = require('./data/chefData.json')
app.use(cors())

app.get('/', (req, res) => {
    res.send('Best Recipes is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs)
})


app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefs.find(c => c.id == id)
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Best Recipes is running on port: ${port}`)
})