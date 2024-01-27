const mongoose = require('mongoose');

// Schema for User
const userSchema = new mongoose.Schema({
  userId: {
    unique: true,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'support'],
    required: true,
  },
  tickets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ticket', // Reference to the Ticket collection
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
