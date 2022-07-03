const express = require('express')
const yt = require("youtube-search-without-api-key");
const app = express()
const port = 8080

app.get('/', (req, res) => {
    yt.search(req.query.query)
        .then(results => {
            res.send(results)
        }).catch(() => {
            res.statusCode = 400;
            res.send("Set valid query parameter")
        })
})

app.listen(port, () => {
    console.log(`Youtube app listening on port ${port}`)
})