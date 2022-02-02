const supabase = require('../../core/supabase')

const deleteById = async (req, res) => {
  const { data, error } = await supabase
    .from('person')
    .delete()
    .match({ id: req.params.id })
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  res.send(data[0])
}

module.exports = deleteById
