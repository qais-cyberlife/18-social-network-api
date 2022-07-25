const router = require('express').Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getUserById).delete(deleteUserById).put(updateUserById);

module.exports = router;