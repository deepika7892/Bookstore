import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book title is required"],
    minlength: [3, "Title must be at least 3 characters"],
    maxlength: [100, "Title cannot be more than 100 characters"],
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
    minlength: [3, "Author name must be at least 3 characters"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
    enum: {
      values: ["Fiction", "Non fiction", "Sci-fi"],
      message: "{VALUE} is not a valid genre", 
    },
  },
  publisheddate: {
    type: Date,
    required: [true, "Published date is required"],
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: "Published date cannot be in the future",
    },
  },
});


const Book = mongoose.model("Book", bookSchema);

export default Book;
