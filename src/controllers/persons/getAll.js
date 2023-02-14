const supabase = require('../../core/supabase')

const getAll = async (_req, res) => {
  const { decodedToken } = res.locals
  const { data, error } = await supabase
    .from('person')
    .select()
    .match({ owner_id: decodedToken.sub })
  if (error) {
    res.status(500).json({ message: error.message })
    return
  }
  res.send(data)
}

module.exports = getAll
