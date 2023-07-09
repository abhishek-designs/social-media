const db = require("../models");
const { Group, User } = db;

class GroupController {
  static async createGroup(req, res) {
    try {
      const userId = req.user.id;
      const { title, description } = req.body;

      const newGroup = await Group.create({
        title,
        description,
        adminId: userId,
      });

      console.log(newGroup, "group");
      res.status(201).json({
        msg: "Group created successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "Internal server error",
      });
    }
  }

  static async fetchGroups(req, res) {
    try {
      //   const userId = req.user.id;

      const groups = await Group.findAll({
        attributes: ["id", "title", "description"],
        include: [
          {
            model: User,
            as: "admin",
            attributes: ["id", "username", "email"],
          },
          {
            model: User,
            as: "users",
            attributes: ["id", "username", "email"],
            through: {
              attributes: [],
            },
          },
        ],
      });

      res.status(200).json({
        msg: "Group created successfully",
        result: groups,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "Internal server error",
      });
    }
  }

  static async joinGroup(req, res) {
    try {
      const userId = req.user.id;
      const groupId = req.params.groupId;

      const group = await Group.findOne({
        where: {
          id: groupId,
        },
      });

      if (!group) {
        return res.status(404).json({
          msg: "This group does not exists",
        });
      }

      const user = await User.findOne({
        where: {
          id: userId,
        },
        include: [
          {
            model: Group,
            as: "groups",
            include: [
              {
                model: User,
                as: "admin",
              },
            ],
            through: {
              attributes: [],
            },
          },
        ],
      });

      console.log(user);

      const hasUser = await group.hasUser(user);
      if (hasUser) {
        return res.status(400).json({
          msg: "User already exist in this group",
          result: user,
        });
      }

      // Add user to the group
      group.addUser(user);

      res.status(200).json({
        msg: "Group joined successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "Internal server error",
      });
    }
  }
}

module.exports = GroupController;
