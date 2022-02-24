const supabase = require('../../core/supabase')

const create = async (req, res) => {
  const { decodedToken } = res.locals
  const { data, error } = await supabase
    .from('person')
    .insert(
      { ...req.body, owner_id: decodedToken.sub }
    )
  if (error) {
    res.status(500).send({ message: error.message })
    console.log(error)
    return
  }
  res.send(data[0])
}

module.exports = create
