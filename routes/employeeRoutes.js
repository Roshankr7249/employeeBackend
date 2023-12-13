const express = require('express');
const router = express.Router();
const {
  
  createData,
  updateData,
  deleteData,
  getData
} = require('../controller/employeeController');

router.get('/', getData);
router.post('/', createData);
router.put('/:_id', updateData);
router.delete('/:_id', deleteData);

module.exports = router;
