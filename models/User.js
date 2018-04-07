const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  displayName: String,
  macros: {
    proteinCount: { type: Number, default: 0 },
    carbCount: { type: Number, default: 0 },
    fatCount: { type: Number, default: 0 }
  }
});

mongoose.model('users', userSchema);
