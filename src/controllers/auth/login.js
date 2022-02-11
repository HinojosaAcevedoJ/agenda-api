const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const supabase = require('../../core/supabase')

const login = async (req, res) => {
  const { data, error } = await supabase
    .from('user')
    .select()
    .eq('email', req.body.email)

  const item = data[0]
  const isCorrect = await bcrypt.compare(req.body.password || '', item?.password || '')
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  if (!isCorrect) {
    res.status(401).send({ message: 'Invalid Credentials' })
    return
  }
  const token = jwt.sign({ sub: item.id }, 'secret', { expiresIn: '7d' })
  res.send({ token })
}

module.exports = login