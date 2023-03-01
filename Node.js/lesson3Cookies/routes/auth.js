import { Router } from 'express'
import User from '../database/schemas/User.js'
import { hashPassword, comparePassword } from '../utils/utils.js'

const router = Router();

// router.post('/login', (req, res ) => {
//     const { username, password } = req.body;
//     if ( username && password ) {
//         if ( req.session.user ) {
//             //res.send(req.session.user)
//             res.send('You are loggen in')
//         } else {
//             req.session.user = { username }
//             res.send(req.session)

//         }
//     } else res.send('Login or password wrong')
// });

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if(!email || !password) res.send(400);

  const userdDB = await User.findOne({ email });
  if(!userdDB) res.send(401);

  const isValid = comparePassword(password, userdDB.password);
  isValid ?res.status(200).send('You are logged in') : res.status(401).send('Wrong email or password');
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