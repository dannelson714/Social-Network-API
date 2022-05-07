const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/applications
router.route('/').get(getThoughts).post(createThought);

// /api/applications/:applicationId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/applications/:applicationId/tags
router.route('/:thoughtId/reactions').post(createReaction);

// /api/applications/:applicationId/tags/:tagId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;