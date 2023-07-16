const express = require('express');
const errorHandler = require('./middlewares/errorHandler');
const router = require('./router');
const app = express();
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(3000, () => console.log('Ouvindo na porta 3000!'));
