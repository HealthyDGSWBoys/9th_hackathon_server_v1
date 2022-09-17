import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'
import User from '../models/User'

export const join = async (req, res) => {
  const { username, password, tall, weight } = req.body

  try {
    await User.create({
      username,
      password,
      tall,
      weight,
    })
  } catch (e) {
    console.error(e)
    return res.status(400).json({
      code: 400,
      errorMessage: 'DB error : User',
    })
  }

  return res.status(200).json({
    code: 200,
    message: '회원가입 성공',
  })
}

export const login = async (req, res) => {
  const { username, password } = req.body
  let ok = []

  const user = await User.findOne({ username })
  console.log(user)

  if (!user) {
    return res.status(400).json({
      code: 400,
      errorMessage: 'User is not found',
    })
  }
  // } else {
  //   ok = await bcrypt.compare(password, user.password)
  // }
  // if (!ok) {
  //   return res.status(400).json({
  //     code: 400,
  //     errorMessage: 'The password is wrong.',
  //   })
  // }

  req.session.loggedIn = true
  req.session.user = user

  console.log(req.session)

  return res.status(200).json({
    code: 200,
    message: 'success',
    session: req.session,
  })
}

export const userinfo = (req, res) => {
  if (req.session.user === undefined) {
    res.status(401)
    res.send()
    return 0
  }
  const { name, username, email } = req.session.user

  if (req.session.loggedIn) {
    res.status(201).json({
      username,
      email,
    })
  }
}

export const logout = (req, res) => {
  req.session.destroy()

  console.log(req.session)

  res.redirect('/')
}
