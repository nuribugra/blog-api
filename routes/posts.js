const express = require('express');
const router = express.Router();
const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const auth = require('../middleware/auth');

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', auth, createPost);

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get('/', getPosts);

// @route   GET api/posts/:id
// @desc    Get post by ID
// @access  Public
router.get('/:id', getPost);

// @route   PUT api/posts/:id
// @desc    Update a post
// @access  Private
router.put('/:id', auth, updatePost);

// @route   DELETE api/posts/:id
// @desc    Delete a post
// @access  Private
router.delete('/:id', auth, deletePost);

module.exports = router;
