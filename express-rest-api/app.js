const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
    res.json([
        {id: 1, name: 'Loan - vợ iu của Sylus'},
        {id: 2, name: 'Trang'},
    ]);
});

app.get('/', (req, res) => {
    res.json([
        {id: 1, name: 'Loan - vợ iu của Sylus'},
        {id: 2, name: 'Trang'},
    ]);
});

//