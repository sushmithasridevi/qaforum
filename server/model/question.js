const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    domain: {
        type: String
    },
    concept: {
        type: String
    },
    question: {
        type: String
    },
    addedOn: {
        type: String
    },
    upVotes: {
        type: Number
    },
    downVotes: {
        type: Number
    },
    answerCounts: {
        type: Number
    },
    postedBy: {
        type: String
    },

    views: {
        type: Number
    }
});
const question = mongoose.model('question', schema);
module.exports = question;
