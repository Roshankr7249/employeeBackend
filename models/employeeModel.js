const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'this field is required'],
  },
  lastName: {
    type: String,
    required: [true, 'this field is required'],
  },
  email: {
    type: String,
    required: [true, 'this field is required'],
  },
  department: {
    type: String,
    enum: ['Tech', 'Marketing', 'Operations'],
    required: [true, 'this field is required'],
  },
  salary: {
    type: Number,
    required: [true, 'this field is required'],
  },
  
},{timestamps:true});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
