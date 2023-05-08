import mongoose from "mongoose";
  const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        
      },
      lastName: {
        type: String,
        
      },
      profileImage: {
        type: String
      },
      phone: {
        type: String
      },
      email: {
        type: String,
        
      },
      workHours: {
        type: Number
      },
      salaryType: {
        type: String,
        enum: ['hourly', 'salary', 'performance']
      },
      salary: {
        type: Number
      },
      department: {
        type: String
      }
    });
  
  const Employee = mongoose.model("Employee", employeeSchema);
  export default Employee;