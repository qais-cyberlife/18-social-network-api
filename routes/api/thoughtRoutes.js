const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getThoughtById,
  updateThoughtById,
  deleteThoughtById,
} = require('../../controllers/thoughtController');

// /api/videos
router.route('/').get(getThoughts).post(createThought);


// /api/videos/:videoId/responses
router.route('/:videoId/responses').post(addVideoResponse);

// /api/videos/:videoId/responses/:responseId
router.route('/:videoId/responses/:responseId').delete(removeVideoResponse);

module.exports = router;
