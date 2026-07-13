const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    mobile: {
      type: String,
      required: [true, "Mobile Number is required"],
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
    },

    department: {
      type: String,
      required: [true, "Department is required"],
      enum: ["HR", "IT", "Finance", "Sales", "Marketing"],
    },

    designation: {
      type: String,
      required: [true, "Designation is required"],
    },

    joiningDate: {
      type: Date,
      required: [true, "Joining Date is required"],
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Employee", employeeSchema);
