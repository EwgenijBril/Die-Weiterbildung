import express from 'express';
import { sequelize }from './database/index.js'; 
import { User } from './database/models/users.js';
import userRouter from './routes/user.js'

const app = express();

app.use(express.json())
app.use('/users', userRouter);

const PORT = 2001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));