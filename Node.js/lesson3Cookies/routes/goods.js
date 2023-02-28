import { Router } from 'express'
import { mobilesList } from '../data/mobilesList.js'

const router = Router()

router.use((req, res,  next) => {
    if (req.session.user) next()
    else res.send(401)
})

router.get('/', (req, res) => {
    res.cookie('visited', true, { maxAge: 60000 })
    res.send(mobilesList)
});

router.get('/:id', (req, res) => {
    // console.log(req.headers.cookie)
    //console.log(req.cookies)
    const { id } = req.params;
    const goodsItem = mobilesList.find( el => el.id === +id );
    res.send(goodsItem)
});

export default router