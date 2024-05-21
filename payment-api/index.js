const express = require('express');
const app = express();
const cors = require('cors');
const stripeRoute = require('./router');
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/stripe', stripeRoute);
app.get('/', (req, res) => {
    res.send('Helloo');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})