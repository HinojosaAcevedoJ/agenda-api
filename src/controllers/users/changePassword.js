const bcrypt = require('bcryptjs')
const supabase = require('../../core/supabase')

const changePassword = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashed = await bcrypt.hash(req.body.password, salt)
  const { data, error } = await supabase
    .from('user')
    .update({ password: hashed })
    .eq('email', req.body.email)
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  res.send(data[0])
}

module.exports = changePassword
