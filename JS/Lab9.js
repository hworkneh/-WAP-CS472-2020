//=======================Q 1==========================
const person = {
    name: "",
    dateOfBirth: "",
    getName: function() {
        return this.name;
    },
    setName: function(newName) {
        this.name = newName;
    }
};

const person1 = Object.create(person);
person1.setName("Jhon");
person1.dateOfBirth = new Date("1998, 12, 10");

console.log("The person's name is " + person1.getName());
console.log(person1.getName() + " was born " + person1.dateOfBirth);


//=====================Q 2=========================
const employee = Object.create(person);
employee.salary = 0;
employee.setSalary = (sal) => employee.salary = sal;
employee.hireDate = new Date();
employee.doJob = (jobTitle) => emp1.getName() + " is a " + jobTitle + " who earns $" + employee.salary;

const emp1 = Object.create(employee);
emp1.setName("Anna");
emp1.setSalary(249995.50);
console.log(emp1.doJob("Programmer"));


//==================Q 3==========================
{
    function Person() {
        this.name = "";
        this.dateOfBirth = "";
        this.getName = () => name;
        this.setName = (newName) => name = newName;
    }
    const person1 = new Person();
    Person.prototype.setDateOfBirth = (dob) => this.dateOfBirth = dob;
    Person.prototype.getDateOfBirth = () => {
        const dob = new Date(this.dateOfBirth);
        return (dob.getFullYear() + "-" + (dob.getMonth() + 1) + "-" + dob.getDate());
    }
    Person.prototype.toString = () => {
        const dob = new Date(this.dateOfBirth);
        return "{Name:" + this.name + ", DateOfBirth:" + dob.getFullYear() + "-" + (dob.getMonth() + 1) + "-" + dob.getDate() + "}"
    };
    person1.setName("John");
    person1.setDateOfBirth(new Date("December 10 1998"));
    console.log(person1.toString());

    const person2 = new Person();
    person2.setName("Peter");
    person2.setDateOfBirth(new Date("November 10 1985"));
    console.log(person2.toString());
}