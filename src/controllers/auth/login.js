const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const supabase = require('../../core/supabase')

const JWT_SECRET = process.env.JWT_SECRET

const login = async (req, res) => {
  const { data, error } = await supabase
    .from('user')
    .select()
    .eq('email', req.body.email)

  const item = data[0]
  const isCorrect = await bcrypt.compare(req.body.password || '', item?.password || '')
  if (error) {
    res.status(500).json({ message: error.message })
    return
  }
  if (!isCorrect) {
    res.status(401).json({ message: 'Invalid Credentials'})
    return
  }
  const token = jwt.sign({ sub: item.id }, JWT_SECRET, { expiresIn: '7d' })
  res.send({ token })
}

module.exports = login
