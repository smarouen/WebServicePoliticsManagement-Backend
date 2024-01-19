const mongoose = require('mongoose');
const ElectionsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  date:{type : String, required:true},
})
const Elections = mongoose.model('Elections', ElectionsSchema);
module.exports = Elections;
