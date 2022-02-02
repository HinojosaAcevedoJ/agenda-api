const supabase = require('../../core/supabase')

const create = async (req, res) => {
  const { data, error } = await supabase
    .from('person')
    .insert(req.body)
  if (error) {
    res.status(500).send({ message: error.message })
    return
  }
  res.send(data[0])
}

module.exports = create
