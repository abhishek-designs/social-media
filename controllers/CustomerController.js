// import { Friendship, User } from "../models/index.js";
// import Friendship from "../models/friendship.js";
const { User, Friendship } = require("../models");
const helpers = require("../helpers");
const { hashPassword, generateToken, verifyPassword } = helpers;

class CustomerController {
  static async signUp(req, res) {
    try {
      const { email, password, confirmPwd } = req.body;
      console.log(email, "passed email");
      // Check the password
      if (password !== confirmPwd) {
        return res.status(400).json({
          msg: "Password didn't match",
        });
      }

      // Check if already exists
      const isExists = await User.findOne({
        where: {
          email,
        },
      });

      console.log(isExists, "isExists");

      if (isExists) {
        return res.status(400).json({
          msg: "Account already exists",
        });
      }

      // Hash the password
      const hashedPwd = await hashPassword(password);

      const user = await User.create({
        ...req.body,
        password: hashedPwd,
      });

      // Generate token
      const authToken = generateToken(user.dataValues);
      res.status(201).json({
        msg: "Customer registered",
        data: authToken,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }

  static async signIn(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        return res.status(404).json({
          msg: "User account not found",
        });
      }

      // Check password
      const isValid = verifyPassword(password, user.password);

      if (!isValid) {
        return res.status(400).json({
          msg: "Email or password is incorrect",
        });
      }

      // Give the token
      const authToken = generateToken(user.dataValues);
      res.status(200).json({
        msg: "Customer loggedin",
        data: authToken,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }

  static async information(req, res) {
    try {
      console.log(req.user, "payload");
      res.status(200).json({
        msg: "Hello World",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }

  static async addFriend(req, res) {
    try {
      const userId = req.user.id;
      const { friendId } = req.body;

      // Send friend request
      await Friendship.create({
        friendId,
        userId,
      });

      res.status(200).json({
        msg: "Friend request sent successfully",
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }

  static async listFriends(req, res) {
    try {
      const userId = req.user.id;

      let query = {
        status: req.query.status || "Pending",
      };

      if (Number(req.query.showRequests)) {
        query = {
          ...query,
          friendId: userId,
        };
      } else {
        query = {
          ...query,
          userId,
        };
      }

      // Fetch friends
      const friends = await Friendship.findAll({
        where: query,
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });

      // Get total count as well
      const totalFriends = await Friendship.count({
        where: query,
      });

      res.status(200).json({
        msg: "Friend list",
        data: friends,
        count: totalFriends,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  }
}

module.exports = CustomerController;
