import { Router } from "express";
    import {
      createEmployee,
      getAllEmployees,
      getEmployee,
      updateEmployee,
      deleteEmployee,
      getEmployeeByName,
    } from "../controllers/employee";
    
    const router = Router();
    router.get("/", getAllEmployees);
    router.get("/:id", getEmployee);
    router.post("/", createEmployee);
    router.put("/:id", updateEmployee);
    router.delete("/:id", deleteEmployee);
    router.get("/name/:name", getEmployeeByName);
    
    export default router;