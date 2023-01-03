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

class Course {
    courseName: string
    students: Student[] = []
    constructor(name: string, courseName: string, students: Student) {
        this.courseName = courseName
    }
    addStudent() {
        this.students.push(Student)
    }
}

class Student extends Human {
    rollNumber: number
    courses: Course[] = []
    balance: number
    constructor(name: string, age: number, rollNumber: number, balance: number) {
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

    payTuitionFee() {
        
    }
}
