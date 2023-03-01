import { Router } from "express" // const { Router } = require('express');
import { storesList } from "../data/storesList.js";

const router = Router();

router.get(
    '/', 
    (req, res, next) => {
        console.log('before getting storeList');
        next()
    },
    (req, res) => {
        console.log('getting storeList')
    res.send(storesList)
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const storeItem = storesList.find(el => el.id === +id)
    res.send(storeItem)
});

export  default router
// module.exports = router;