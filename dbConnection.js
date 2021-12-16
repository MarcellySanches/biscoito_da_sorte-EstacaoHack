const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://ofjtsbahpevypz:b25af8939d9794298bce22f2d42e3da10c7a213cffbde9576ffdfb6357dbd300@ec2-3-218-149-60.compute-1.amazonaws.com:5432/d45phrihhs12r8',
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = client