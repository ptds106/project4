// Fake users data
const users = [
  {
    id: 1,
  },
  { id: 2 },
  { id: 3 },
]

const googleApi = "asdjfklsadjfkdlasjldjas"

export default (req, res) => {
  // Get data from your database
  res.status(200).json(users)
}
