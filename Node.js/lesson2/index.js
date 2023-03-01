import  express  from "express";// надо в package.json добавить "type": "module"
// const express = require('express');
import mobilesRouter from './routes/mobiles.js'
import storesRouter from './routes/stores.js'
// const mobilesRouter = require('./routes/mobiles');
// const storesRouter = require('./routes/stores');

const app = express();

const PORT = 2222;

app.use(express.json());

app.use( '/mobiles', mobilesRouter);

app.use('/stores', storesRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



