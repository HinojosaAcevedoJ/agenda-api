const supabase = require('../../core/supabase')

const getByName = async (req, res) => {
  const { decodedToken } = res.locals
  const { data, error } = await supabase
    .from('person')
    .select()
    .match({ firstName: req.params.firstName, owner_id: decodedToken.sub })
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

module.exports = getByName
