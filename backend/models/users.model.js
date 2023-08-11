const mongoose = require("mongoose");
const User = new mongoose.Schema(
	{
		tk: {
			type: String,
			require: true,
		},
		mk: {
			type: String,
			require: true,
		},
		laadmin: {
			type: Boolean,
			default: false,
		},
		laKhach: { type: Boolean, default: true },
		ten: {
			type: String,
			require: true,
		},
		lapt: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = {
	schema: User,
	model: mongoose.model("User", User),
};
