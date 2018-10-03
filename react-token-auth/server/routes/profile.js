//could name this user
const express = require("express");
const profileRoutes = express.Router();
const expressJwt = require("express-jwt");
const User = require("../models/user");

//add Middleware
profileRoutes.use(expressJwt({ secret: process.env.SECRET }));

//NOW:  make the route:
profileRoutes.get("/", (req, res) => {
  User.findOne({ _id: req.user._id }, (err, uer) => {
    if (err)
      return res.status(500).send({ success: fale, err: "User not found" });
    if (user === null)
      return res.status(400).send({ success: false, err: "User not found" });
    return res.status(200).send({ success: true, user: withoutPassword() });
  });
});

module.exports = profileRoutes;
