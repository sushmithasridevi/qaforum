const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
    createdBy: {
        type: String
    },
    content: {
        type: String
    },
    answeredOn: {
      type: String
    },
    upVotes: {
        type: Number
    },
    downVotes: {
        type: Number
    }
  });
const model = mongoose.model('answer', schema);
module.exports = model;
