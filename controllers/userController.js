const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update a user
  updateUserById(req, res) {
    User.findByIdAndUpdate({ _id: req.params.userId }, {
      $set: req.body
    })
      .then(data => {
        if (data) {
          res.json(data);
          res.status(200)
        } else {
          console.error('Update Data not Successful!')
        }
      }).catch((err) => res.status(500).json(err));
  },

  // delete a User
  deleteUserById(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "User Not Found!" })
        }
        res.status(200).json({ message: "User Deleted Successfully" })

      })
      .catch((err) => res.status(500).json(err));
  },
};