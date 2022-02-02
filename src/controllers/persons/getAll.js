const supabase = require('../../core/supabase')

const getAll = async (_req, res) => {
  const { data, error } = await supabase
    .from('person')
    .select()
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  res.send(data)
}

module.exports = getAll
