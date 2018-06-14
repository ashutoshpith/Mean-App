const express = require('express');

const app=express();


app.use("/api/posts",(req, res, next) => {
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
