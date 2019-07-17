const express = require('express');
const data = require('./data.json')
const path = require('path')

const app = express();

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/', (req, res) => {
  res.send("This is the home route")
})

app.get('/api/v1/variants/', (req, res) => {
  res.json(data)
})

app.get('/api/v1/variants/:variant_id', (req, res) => {

  if(data[req.params.variant_id]){
    res.send(data[req.params.variant_id])
  }
  else{
    res.sendStatus(404)
  }

})

app.get('/api/v1/:gene/suggest/', (req, res) => {
  res.send(Object.keys(data).filter((gene) => gene.includes(req.params.gene)))
})

const port = process.env.PORT || 5000;



app.listen(port, () => `Server running on port ${port}`);

module.exports = app;