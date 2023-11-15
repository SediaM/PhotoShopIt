const { Schema, Types } = require('mongoose');

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: true,
      minlength: 1,
      maxLength: 280,
    },
    imageLink: {
      type: String,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = commentSchema;
