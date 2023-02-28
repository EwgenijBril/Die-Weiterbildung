import { Router } from 'express'
import { storesList } from '../data/storesList.js'

const router = Router()

router.use((req, res,  next) => {
    if (req.session.user) next()
    else res.send(401)
})

router.get('/', (req, res) => {
    //console.log(req.cookies)
    res.send(storesList)
})

export default router