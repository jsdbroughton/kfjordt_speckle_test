const express = require('express')
const { readFile } = require('fs')

const app = express()

app.get('/', (request, response) => {

    readFile('./home.html', 'utf-8', (err, html) => {
        
        response.send(html)
        
    })

});

app.use("/static", express.static('./static/'));
app.listen(process.env.PORT || 3000, () => console.log("http://localhost:3000"))