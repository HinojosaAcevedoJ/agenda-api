const bcrypt = require('bcryptjs')
const supabase = require('../../core/supabase')

const signup = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  const { data, error } = await supabase
    .from('user')
    .insert({
      ...req.body,
      password: hashed
    })
  if (error) {
    res.status(500).json({ message: error.message })
    return
  }
  res.send(data[0])
}

module.exports = signup
