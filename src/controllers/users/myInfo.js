const supabase = require('../../core/supabase')

const myInfo = async (_req, res) => {
  const { decodedToken } = res.locals
  const { data, error } = await supabase
    .from('user')
    .select()
    .eq('id', decodedToken.sub)
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  res.send(data[0])
}

module.exports = myInfo
