const { User } = require("../models");

class UserController {
	static addUser = async (req, res, next) => {
		try {
			const { nama, email, password } = req.body;
			const newItem = await User.create({
				nama,
				email,
				password,
			});
			res.status(200).json({ newItem, message: "Data added succesfully" });
		} catch (error) {
			res.status(500).json({ error: "Server error" });
		}
	};

	static showAllUser = async (req, res, next) => {
		try {
			const data = await User.findAll({});
			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ error: "Server error" });
		}
	};

	static showSpecificUser = async (req, res, next) => {
		try {
			const data = await User.findByPk(req.params.id);

			if (!data) {
				return res.status(404).json({ message: "ID not found" });
			}

			res.status(200).json(data);
		} catch (error) {
			res.status(500).json({ error: "Server error" });
		}
	};

	static updateUser = async (req, res, next) => {
		try {
			const { nama, email, password } = req.body;

			const user = await User.findByPk(req.params.id);
			if (!user) {
				return res.status(404).json({ message: "User not found" });
			}

			user.activity = activity || user.activity;
			user.description = description || user.description;
			user.priority = priority || user.priority;
			user.updatedAt = autoFillUpdatedAt || user.updatedAt;
			user.deadline = deadline || user.deadline;

			// Save the updated item
			await user.save();

			res.status(201).json({
				user,
				message: "User has been updated",
			});
		} catch (error) {
			res.status(500).json({ error: "Server error" });
		}
	};

	static deleteUser = async (req, res, next) => {
		try {
			const { id } = req.params;
			const data = await User.findByPk(id);

			if (!data) {
				return res.status(404).json({ message: "ID not found" });
			}

			const destroy = await User.destroy({
				where: {
					id,
				},
			});

			res
				.status(200)
				.json({ message: "the data below has been deleted", data });
		} catch (err) {}
	};
}

module.exports = UserController;
