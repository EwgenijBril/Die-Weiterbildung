import express from 'express'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import goodsRouter from './routes/goods.js'
import shopsRouter from './routes/shops.js'
import cartRouter from './routes/cart.js'
import authRouter from './routes/auth.js'
import './database/index.js'



const app = express();

const PORT = 2000;

app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: "secret word", // нужно для шифрования и дешифрования куков
    resave: false,
    saveUninitialized:false
}));

app.use( '/goods', goodsRouter )
app.use( '/shops', shopsRouter )
app.use( '/cart', cartRouter )
app.use( '/auth', authRouter )




app.listen(PORT, () => console.log(`Server started on port ${PORT}`))