const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_KEY = process.env.JWT_KEY
const salt = 7
const User = require("../models/user")

router.post('/register', async (req, res) => {
   try {
      const { name, password } = req.body
      const user = await User.findOne({ name });
      if (!user) {
         const hash = await bcrypt.hashSync(password, salt);
         const newUser = new User({ name, password: hash })
         await newUser.save();
         let tokenData = { name };
         let token = await jwt.sign(tokenData, JWT_KEY, { expiresIn: '60h' });
         let data = { user: { name, _id: newUser._id}, token }
         
         res.status(201).send(data)
      }
      else {
         res.send('Nickname em uso')
      }
   } catch (err) {
      res.send('Verifique sua internet')
   }
})
router.post('/login', async (req, res) => {
   try {
      const { name, password } = req.body
      const user = await User.findOne({ name });
      if (user) {
         let compare = await bcrypt.compareSync(password, user.password);
         if (compare) {
            let tokenData = { name };
            let token = await jwt.sign(tokenData, JWT_KEY, { expiresIn: '60h' });
            let data = { user: { name, _id: user._id }, token }
            res.status(201).send(data)
         }
         else
            res.status(200).send('Senha invalida')
      }
      else {
         res.status(200).send('Usuario não registrado')
      }
   } catch (error) {
      res.send('Verifique sua conexão')
   }
})
router.post('/verify', (req, res) => {
   try {
      const token = req.headers['authorization'].split(' ')[1]
      jwt.verify(token, JWT_KEY, (err, decode) => {
         if (err)
            res.send(false)
         else
            res.send(true)
      })
   } catch (error) {
      res.send('Verifique sua internet')
   }
})
module.exports = router