const Employee = require("../models/employeeModel");


const getData = async (req, res) => {
  try {
    const { sortBy, searchName, department, page = 1, limit = 5 } = req.query;
    const skip = (page - 1) * limit;
    let query = {};

    if (department) {
      query = { department };
    }

    if (searchName) {
      query = { ...query, firstName: { $regex: searchName, $options: "i" } };
    }

    let sortQuery = {};
    if (sortBy === "salary") {
      sortQuery = { salary: 1 };
    }

    const employees = await Employee.find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(limit);
    res.status(200).json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const createData = async (req, res) => {
  const { firstName, lastName, email, department, salary } = req.body;

  try {
    const newEmployee = new Employee({
      firstName,
      lastName,
      email,
      department,
      salary,
    });

    await newEmployee.save();

    res.status(201).json({ message: "successfully created Employee " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in creating employee details" });
  }
};

const updateData = async (req, res) => {
  const { _id } = req.params;
  const { firstName, lastName, email, department, salary } = req.body;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      _id,
      {
        firstName,
        lastName,
        email,
        department,
        salary,
      },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      employee: updatedEmployee,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteData = async (req, res) => {
  const { _id } = req.params;

  try {
    const deletedEmployee = await Employee.findByIdAndDelete(_id);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createData,
  updateData,
  deleteData,
  getData,
};
