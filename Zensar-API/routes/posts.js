const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

// GET BACK ALL THE POSTS
router.get('/', async (req, res) => {
  //res.send('This is posts');
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST
router.post('/', async (req, res) => {
  console.log(req.body);
  const post = new Post({
    Image: req.body.Image,
    name: req.body.name,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// DELETE A SPECIFIC POST
router.delete('/:deleteId', async (req, res) => {
  console.log(req.params.deleteId);
  try {
    const removedPost = await Post.remove({ _id: req.params.deleteId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// UPDATE A POST
router.patch('/:updateId', async (req, res) => {
  console.log(req.params.updateId, req.body);
  try {
    const updatedPost = await Post.remove(
      { _id: req.params.updateId },
      { $set: { name: req.body.name, Image: req.body.Image } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
