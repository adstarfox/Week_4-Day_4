const bcrypt = require(`bcryptjs`)

const users = []

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && bcrypt.compareSync(password,users[i].password)) {
          res.status(200).send(users[i])
          let userCopy = {...users[i]}
          delete userCopy.password
          res.status(200).send(userCopy)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)
        let salt = bcrypt.genSaltSync(8)
        let hashedCode = bcrypt.hashSync(req.body.password,salt)
        req.body.password = hashedCode

        users.push(req.body)
        console.log(users)
        let fakeUser = {...req.body}
        delete fakeUser.password
        console.log(users)
        console.log(fakeUser)
        res.status(200).send(fakeUser)
    }
}