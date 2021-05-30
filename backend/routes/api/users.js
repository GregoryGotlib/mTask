const router = require("express").Router();
const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("dotenv").config();

router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists!" });
    } else {
      const newUser = new User({
        email: req.body.emailValue,
        password: req.body.passwordValue,
      });
      bcrypt.genSalt(10, (error, salt) => {
        bcrypt.hash(newUser.password, salt, (error, hash) => {
          if (error) {
            throw error;
          }
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((error) => console.log(error));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  const email = req.body.emailValue;
  const password = req.body.passwordValue;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json({ email: "User not exists!" });
    }
    console.log(process.env.secretOrKey);
    bcrypt.compare(password, user.password).then((isValid) => {
      if (isValid) {
        const data = { id: user.id, email: user.email };
        // Sign this data into web token
        jwt.sign(
          data,
          process.env.secretOrKey,
          { expiresIn: 7200 },
          (error, token) => {
            res.json({ success: true, token: "Bearer " + token });
          }
        );
      } else {
        return res.status(400).json({ password: "Password incorrect!" });
      }
    });
  });
});

router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

module.exports = router;
