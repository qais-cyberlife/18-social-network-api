const { Schema, model } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: mongoose.Types.ObjectId,
      default: new mongoose.Types.ObjectId,
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


// Initialize our Reaction model
const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;