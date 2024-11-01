const express = require('express');
const todoRoutes = require('./src/routes/todoRoutes');

const app = express();
const port = 3000;

app.use('/api', todoRoutes); // Sử dụng các route đã định nghĩa

app.get('/', (req, res)=>{
    res.send('Helluuuu!')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});