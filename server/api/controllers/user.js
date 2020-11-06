const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const DeletedUser = require("./../models/deletedUsers");

exports.user_signup = async (req, res, next) => {
  console.log(req.body);
  User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  })
    .then((checkUser) => {
      if (checkUser) {
        return res.status(409).json({
          message: "User Is already exists",
        });
      }
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log("bcrypt");
          console.log(err);
          return res.status(500).json({
            error: err,
          });
        } else {
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            username: req.body.username,
            password: hash,
          });
          user
            .save()
            .then((result) => {
              console.log(result);
              const token = jwt.sign(
                {
                  email: result.email,
                  username: result.username,
                  userId: result._id,
                },
                "somesupersecretkey",
                {
                  expiresIn: "24h",
                }
              );
              return res.status(201).json({
                message: "Auth successful",
                token: token,
                userId: result._id,
              });
            })
            .catch((err) => {
              console.log("else");
              console.log(err);
              return res.status(500).json({
                error: err,
              });
            });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

exports.user_login = (req, res, next) => {
  User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }],
  })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(204).json({
          message: "No user with existing values",
        });
      }
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user.username,
              email: user.email,
              userId: user._id,
            },
            "somesupersecretkey",
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "Auth successful",
            token: token,
            userId: user._id,
          });
        }
        res.status(401).json({
          message: "Auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.user_password_change = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  User.findById(req.userId)
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(204).json({
          message: "No user with existing values",
        });
      }
      bcrypt.compare(req.body.oldPassword, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({
            message: "The password is Incorrect",
          });
        } else if (result) {
          bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
            if (err) {
              return res.status(500).json({
                error: err,
              });
            } else {
              User.update({ _id: user._id }, { password: hash });
              return res.status(200).json({
                message: "Passoword Changed Successfully",
              });
            }
          });
        } else {
          res.status(500).json({
            message: "Something wont wrong",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.user_delete = (req, res, next) => {
  if (!req.isAuth) {
    return res.status(401).json({
      error: "Unauthonticated!",
    });
  }
  User.deleteOne({ _id: req.userId })
    .exec()
    .then((resu) => {
      const deleted = new DeletedUser({
        date: new Date().toISOString(),
      });
      deleted
        .save()
        .then((r) => {
          const response = res.status(204).json({
            message: "User Deleted!",
          });
          return response;
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({
            error: err,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
