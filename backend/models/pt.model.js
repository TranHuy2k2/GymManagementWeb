const mongoose = require("mongoose");
const PT = new mongoose.Schema(
	{
		image: {
			type: String,
			require: true,
		},
		ten: {
			type: String,
			require: true,
		},
		ngaysinh: {
			type: Date,
			require: true,
			validate: {
				validator: function (input) {
					return (
						Object.prototype.toString.call(
							input
						) === "[object Date]" &&
						new Date(input) < new Date()
					);
				},
				message: (input) =>
					`${input} phải sớm hơn ngày hiện tại`,
			},
		},
		// true là nam
		gioitinh: {
			type: Boolean,
			default: true,
		},
		cccd: {
			type: String,
			require: true,
		},
		sdt: {
			type: String,
			require: true,
			validate: {
				validator:
					function isVietnamesePhoneNumberValid(
						number
					) {
						return /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/.test(
							number
						);
					},
				message: () => "Số điện thoại không hợp lệ",
			},
		},
		chieucao: {
			type: Number,
			require: true,
			validate: (input) => input >= 0,
			message: () =>
				"Chiều cao phải là số lớn hơn bằng 0",
		},
		cannang: {
			type: Number,
			require: true,
			validate: (input) => input >= 0,
			message: () =>
				"Cân nặng phải là số lớn hơn bằng 0",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

module.exports = {
	schema: PT,
	model: mongoose.model("PT", PT),
};
