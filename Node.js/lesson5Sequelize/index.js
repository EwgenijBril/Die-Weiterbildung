import express from 'express';
import { sequelize }from './database/index.js';

const app = express();

const PORT = 2001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));