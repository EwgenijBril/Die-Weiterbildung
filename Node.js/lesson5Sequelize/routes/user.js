import { Router } from "express";
import { User } from "../database/models/users.js"

const router = Router();

router.get('/', async (req, res) => {
    const users = await User.findAll()
    // users.forEach(el => console.log(el.toJSON()));
    res.send(users)
});

router.post('/', (req, res) => {
    User.create(req.body);
    res.send(201);
});

export default router;