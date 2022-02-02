const supabase = require('../../core/supabase')

const getById = async (req, res) => {
  const { data, error } = await supabase
    .from('person')
    .select()
    .eq('id', req.params.id)
  const item = data[0]
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  if (!item) {
    res.status(404).send({ message: 'Person not found' })
    return
  }
  res.send(item)
}

module.exports = getById
