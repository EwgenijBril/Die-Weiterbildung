import { Router } from 'express'
import { mobilesList } from '../data/mobileList.js';

const router = Router();

router.use((req, res, next) => {
    if(req.session.user) next()
    else res.status(401).json({msg: 'Unauthorized'})
})

router.get('/', (req, res) => {
    res.json(mobilesList)
});

export default router