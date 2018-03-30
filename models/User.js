import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  macros: {
    proteinCount: { type: Number, default: 500 },
    carbCount: { type: Number, default: 500 },
    fatCount: { type: Number, default: 500 }
  }
});

mongoose.model('users', userSchema);
