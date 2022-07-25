const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
    },

    email: {
      type: String,
      unique: true,
      required: true,
      match: [`/.+@.+\..+/`, "Please enter a valid e-mail address"],
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      }
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],

  },
);

// Create a virtual property `fullName` that gets and sets the user's full name
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return `${this.length}`;
  })

  
// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
