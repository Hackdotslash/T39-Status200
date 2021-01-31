const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: String,
    marks: { type: Number, default: 5 },
    difficulty: { type: Number, min: 0, max: 10, default: 8 }
})

const Question = mongoose.model('question', QuestionSchema);

module.exports = Question;