import chalk from "chalk"

// human class
class Human {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
}

// Course class
class Course {
    name: string
    coursePrice: number
    student: Student
    feeBank: number
    constructor(name: string, coursePrice: number, students: Student, feeBank: number) {
        this.name = name
        this.coursePrice = coursePrice
        this.student = students
        this.feeBank! = feeBank
    }
    addStudent(Student: Student) {
        this.student = Student
    }
}

// Student class
class Student extends Human {
    rollNumber: number
    balance: number
    constructor(name: string, age: number, rollNumber: number,  balance: number) {
        super(name, age)
        this.rollNumber = rollNumber
        this.balance = balance
    }
    getRollNumber(rollNumber: number) {
        return this.rollNumber = rollNumber
    }

    getBalance(balance: number) {
        return this.balance = balance
    }

    showStatus() {
        return Student
    }

    payTuitionFee(feeBank: number) {
        return feeBank = feeBank
    }
}

// Student object
var student1: Student = new Student("Huzaifa", 21, 79799, 5000)

// Course object
var course1: Course = new Course("Web3 and Metaverse", 3000, student1, 3000)

// View balance
student1.getBalance
console.log(chalk.yellow(`\nStudent1's balance is ${student1.balance}.\n`))

// Paying tuition fee
student1.payTuitionFee
console.log(chalk.blue(`\nThe tuition, amount of ${course1.feeBank} is paid.\n`))

// Show status
student1.showStatus
console.log(chalk.green(`\nBelow are the student details:\n`))
console.log(chalk.green(`Name: ${student1.name}`))
console.log(chalk.green(`Age: ${student1.age}`))
console.log(chalk.green(`Roll Number: ${student1.rollNumber}`))
console.log(chalk.green(`Balance: ${student1.balance}`))