const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// api/thought
router.route('/:thoughtId').get(getThoughtById).delete(deleteThoughtById).put(updateThoughtById);

module.exports = router;
