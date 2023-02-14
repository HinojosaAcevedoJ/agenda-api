const supabase = require('../../core/supabase')

const getById = async (req, res) => {
  const { decodedToken } = res.locals
  const { data, error } = await supabase
    .from('person')
    .select()
    .match({ id: req.params.id, owner_id: decodedToken.sub })
  const item = data[0]
  if (error) {
    res.status(500).json({ message: error.message })
    return
  }
  if (!item) {
    res.status(404).json({ message: 'Person not found' })
    return
  }
  res.send(item)
}

module.exports = getById
