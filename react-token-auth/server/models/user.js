const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

// Pre save 'hook' to encrupt password vbefoe saving the new user's iform,ation
// use "NEXT" inside the function for middleware
// we do this, because we are using Mongoose / Mongoose Schema
userSchema.pre("save", function(next) {
  const user = this;
  //check that password has not been modified; will be username & password
  if (!user.isModified("password")) return next();
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

// check password:  user.checkPassword (in routes)
// METHOD for CHECKINGPASSWORDS - use callback function

userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  const user = this;
  bycrypt.compare(passwordAttempt, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

// METHOD for Removing password from the object being sent back to the client

userSchema.methods.withoutPassword = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model("User", userSchema);
