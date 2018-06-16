const express = require('express');
const bodyParser = require("body-parser");

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  
  next();
  
});
app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added Successfully'
  });
  

});


app.get("/api/posts",(req, res, next) => {
  const posts = [
    {
      id: "fad23333a",
      title: "first",
      content: "this is first content"
    },
    {
      id: "adaad23333a",
      title: "second",
      content: "this is second content"
    },
    {
      id: "d23333a",
      title: "third",
      content: "this is third content"
    }
  ];
  res.status(200).json({
    message: 'Post feteched successfully',
    posts: posts
  });
});

module.exports = app;
