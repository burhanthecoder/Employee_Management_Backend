import Employee from "../models/employee";

    export const getAllEmployees = async (req, res) => {
      const employees = await Employee.find();
      res.json(employees);
    }
    export const getEmployee = async (req, res) => {
      const employee = await Employee.findById(req.params.id);
      res.json(employee);
    }
    export const createEmployee = async (req, res) => {
      const newEmployee = new Employee(req.body);
      await newEmployee.save();
      res.json(newEmployee);
    }
    export const updateEmployee = async (req, res) => {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(employee);
    }
    export const deleteEmployee = async (req, res) => {
      await Employee.findByIdAndDelete(req.params.id);
      res.json({ message: "Employee deleted" });
    }
    export const getEmployeeByName = async (req, res) => {
      const employee = await Employee.find({ name: req.params.name });
      res.json(employee);
    }