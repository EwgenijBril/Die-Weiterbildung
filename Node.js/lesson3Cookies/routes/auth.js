import { Router } from 'express'
import User from '../database/schemas/User.js'
import { hashPassword } from '../utils/utils.js'

const router = Router();

router.post('/login', (req, res ) => {
    const { username, password } = req.body;
    if ( username && password ) {
        if ( req.session.user ) {
            //res.send(req.session.user)
            res.send('You are loggen in')
        } else {
            req.session.user = { username }
            res.send(req.session)

        }
    } else res.send('Login or password wrong')
});

router.post('/register', async (req, res) => {
    const { email } = req.body;
    const userDB = await User.findOne({ email });
    if(userDB) {
      // Юзер с таким мэйлом уже существует
      res.status(400).send({ message: 'User already exists' })
    } else {
      // Создать юзера
      //const hashPassword = hashPassword(password)
      const password = hashPassword(req.body.password)
      const newUser = await User.create({ email, password });
      res.status(201).send({ message: 'User created'})
    }
  });

export default router