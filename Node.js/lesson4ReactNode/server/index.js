import express from "express";
import authRouter from './routes/auth.js'
import productsRouter from './routes/products.js'
import session from "express-session";
import './database/index.js'
import cors from 'cors'

const app = express();

const PORT = 2000;

app.use(express.json());

app.use(session({
    secret: "secret word", // нужно для шифрования и дешифрования куков
    resave: false,
    saveUninitialized:false
}));

app.use(cors({
    origin: '*'
}));

app.use('/auth', authRouter)
app.use('/products', productsRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))