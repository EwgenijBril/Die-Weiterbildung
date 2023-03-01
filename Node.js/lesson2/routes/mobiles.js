import { Router } from "express" // ипорт функции Router из express
import { mobilesList } from "../data/mobilesList.js";
// const { Router } = require('express');

const router = Router(); // создаем экземпляр роута

router.get('/', (req, res) => {
    const { quantity } = req.query
    const parsedQuantity = parseInt(quantity)
    if (!isNaN(parsedQuantity)) {
        const filteredMobilesList = mobilesList.filter(el => el.quantity >= parsedQuantity)
        res.send(filteredMobilesList)
    } else {
        res.send(mobilesList)
    }
    
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const mobileItem = mobilesList.find(el => el.id === +id)
    res.send(mobileItem)
});

router.post('/', (req, res) => {
    mobilesList.push(req.body);
    res.send(201)
});

export  default router
// module.exprots = router;