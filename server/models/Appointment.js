import { Schema, model } from "mongoose";

const appointmentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    appointmentReason: {
      type: String,
      default: "Ragular Checkup",
    },
    appointmentType: {
      type: String,
      enum: [
        "First Checkup",
        "follow up-1",
        "Follow up-2",
        "Follow up-3",
        "final Checkup",
      ],
      default: "First checkup",
    },
    appointmentDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", " In Progress", "Completed", "Canceled"],
      default: "pending",
    },
    createdAt: {
      type: Date,
    },
    cancelledAt: {
      type: Date,
    },
    note: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
