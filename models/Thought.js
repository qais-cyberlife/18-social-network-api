const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction')


// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      unique: true,
      required: true,
      min: 1,
      max: 280,
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

    username:
    {
      type: String,
      required: true
    },

    reactions: [
      reactionSchema
    ],

    timestamp: {
      type: Date,
      default: Date.Now,
    }

  },
);

// Create a virtual property `fullName` that gets and sets the user's full name
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return `${this.reactions.length}`;
  })


// Initialize our User model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;