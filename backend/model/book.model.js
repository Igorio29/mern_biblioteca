import mongoose from "mongoose";
const boockSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
      required: true,
    },

    cover: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); //ele vai criar um campo de create e update

export const Book = mongoose.model("Book", boockSchema);
