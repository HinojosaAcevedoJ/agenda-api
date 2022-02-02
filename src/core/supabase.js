const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  process.env.URL_SUPABASE,
  process.env.KEY_SUPABASE
)

module.exports = supabase
