// create array named employess
//create an employee constructor w name, title, salary
//status will be defaulted to "Full Time"
//add a Method - called printEmployeeForm & print to the console

var employees = []

function Employees (name, title, sal, stat) {
    this.Name = name;
    this.Title = title;
    this.Salary = sal;
    this.Status = stat;
    this.stat = function (){
        console.log("Full Time");
};

    this.stat = function (newStatus){
        console.log('Your status was changed from ${this.stat} to ${newStatus}')
        this.Status = newStatus;
    }

    this.pringtEmployeeForm = function(){
        return Employees
    }
}
var name = new Employees('Will', 'Sam', 'Skip')
var title = new Title ()
