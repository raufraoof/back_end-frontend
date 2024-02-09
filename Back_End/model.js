const mongoose = require("mongoose")

//connection
mongoose.connect("mongodb+srv://raufraoof34:12345@cluster0e.efecezc.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Db connected")
})
.catch(err=>console.log(err))

let mongoSchema = mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number

})

var employeeModel = mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel  

