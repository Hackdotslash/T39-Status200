const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

const Question = require('./models/Question')


const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database linked successfully!");
});

app.route('/addQuestion').post((req, res) => {
  let question = req.body.question;
  let marks = req.body.marks;
  let difficulty = req.body.difficulty;

  let question = new Question({
    question, marks, difficulty
  })

  question.save().then(() => {
    res.send({
      message: "Question Added Successfully"
    })
  }).catch(err => {
    if (err) {
      res.send({
        err: err
      })
    }
  })
})


app.route('/').get((req, res) => {
  Question.find({}).then((result, err) => {
    if (err) {
      res.send({
        err: err
      })
    }
    else {
      res.send({
        questions: result
      })
    }
  })
})



app.listen(port, () => {
  console.log("Server is running at port : ", port);
});
