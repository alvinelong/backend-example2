// To import express library
const express = require("express");

// Import data.js
const database = require("./data");

// define a router object
let router = express.Router();

// define an API to return all the users
router.get("/users/all", (request, response) => {
  let users = database.get_all_users();
  response.send(users);
});

// define an API to return by user id
router.get("/user/by-uid", (request, response) => {
    let users = database.get_user_by_user_id(request.query.user_id);
    response.send(users);
  });

// define an POST API to add a new user to database.
// User's information is passed request's body section.
router.post("/users/add", (request, response) => {
    //   fetch the user details from the request.body
    let user = request.body;
    //   add user to database
    database.add_user(user);
    //   send the success message as response.
    response.send("User added!");
  });


module.exports = { router };
