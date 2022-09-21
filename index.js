const express = require('express');
const cors = require('cors');
const router = require('./routes/user.js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/user', router);



app.get('/', (req, res) => {
    res.send('This is our toolsmart site')
})
app.listen(port, () => {
    console.log(`Hellow-World ${port}`)
});
  
 