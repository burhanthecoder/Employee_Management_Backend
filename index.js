
    import express from "express";
    import mongoose from "mongoose";
    import dotenv from "dotenv";
    import cors from "cors";
    import bodyParser from "body-parser";
    
    import employee from "./routes/employee";
    const app = express();
    dotenv.config();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get("/", (req, res) => {
      res.send("Hello World");
    });
    app.use("/employee", employee)
      
      app.listen(process.env.PORT ?? 5000, () => {
        console.log("Server started at port " + process.env.PORT ?? 5000);
        mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },)
      });
    