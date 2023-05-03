const express = require('express')

const app = express()

const port = 5000;

app.get('/', (req, res) => {
    res.send('Best Recipes is running')
});

app.listen(port, () => {
    console.log(`Best Recipes is running on port: ${port}`)
})