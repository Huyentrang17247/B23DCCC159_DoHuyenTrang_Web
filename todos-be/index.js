const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const port = 3007;

app.use(bodyParser.json()); 
app.use('/', todoRoutes); 
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
