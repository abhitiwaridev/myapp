// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: false
    },
    snippet: {
        type: String,
        required: true
    }
}, {  collection: 'blogs',timestamps: true });

// Compile model from schema
const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;