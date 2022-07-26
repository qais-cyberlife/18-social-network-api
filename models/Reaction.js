const { Schema, model, Types} = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      max: 280
    },

    username:
    {
      type: String,
      required: true
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => {
        if (date)
          return
        date.toISOString().split("T")
      }
    },

    timestamp: {
      type: Date,
      default: Date.Now,
    }

  },
);

module.exports = reactionSchema;