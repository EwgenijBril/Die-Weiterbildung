import { Router } from 'express'

const router = Router();

router.get('/', ( req, res) => {
    const { cart } = req.session
    if ( !cart ) {
        res.send('You have no cart')
    } else {
        res.send(cart)
    }
    //res.send(200)
});

router.post('/item', (req, res) => {
   const { id, mobile, color, quantity } = req.body;
   const cartItem = { id, mobile, color, quantity }
   const { cart } = req.session;
   if ( cart ) {
    req.session.cart.items.push(cartItem);
   } else {
    req.session.cart = {
        items: [ cartItem ]
    }
   }
   console.log(req.sessionID);
    res.send(201)
});

export default router
