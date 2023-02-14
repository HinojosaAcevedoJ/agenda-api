const supabase = require('../../core/supabase')

const deleteById = async (req, res) => {
  const { decodedToken } = res.locals
  const { data, error } = await supabase
    .from('person')
    .delete()
    .match({ id: req.params.id, owner_id: decodedToken.sub })
  if (error) {
    res.status(500).json({ message: error.message })
    return
  }
  res.send(data[0])
}

module.exports = deleteById
