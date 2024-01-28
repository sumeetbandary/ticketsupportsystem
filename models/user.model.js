import mongoose from "mongoose";
import {v4 as uuidv4} from 'uuid';
// Schema for User
const userSchema = new mongoose.Schema({
  userId: {
    type:String,
    default: uuidv4(), // Set default value to a new UUID
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

export default User;
