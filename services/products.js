const express = require('express');
const bodyParser = require('body-parser');
var jwt = require('express-jwt');
const path = require('path');

const config = require('../config/index.js');
const DBconn = require('../db/connection');
const products = require('../handlers/products');
const cors = require('cors');

var c = config.getConfig('db');


DBconn.init(c);
const api = express();
api.use(bodyParser.json());
// api.use(
//     jwt(
//         {secret: config.getConfig('jwt').key}
//     )
// );

api.use(cors());

api.get('/api/v1/products', products.getAll);
api.get('/api/v1/products/:id', products.getOne);
api.post('/api/v1/products/', products.save);
api.put('/api/v1/products/:id', products.replace);
api.patch('/api/v1/products/:id', products.update);
api.delete('/api/v1/products/:id', products.remove);

if (process.env.NODE_ENV === 'production') {
    
    api.use(express.static('client/build'));

    api.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
    }
    const port = process.env.PORT || 8081;

api.listen(8081, err =>{
    if(err){
        console.log('could not start server');
        console.log(err);
        return;
    }
    console.log(`server started successfully on port ${port}`);
});
