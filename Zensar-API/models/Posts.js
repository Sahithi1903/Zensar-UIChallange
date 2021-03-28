const mongoose = require('mongoose');

// describe the post
const postSchema = mongoose.Schema({
  Image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

module.exports = mongoose.model('Posts', postSchema);
