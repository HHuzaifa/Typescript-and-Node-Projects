class Person {
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

class Instructor extends Person{
    salary: number
    courses: string[] = []
    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary
    }
    assignCourses(course: string) {
        this.courses.push(course)
    }
}

class Student extends Person {
    rollNumber: string
    courses: string[] = []
    constructor(name: string, age: number, rollNumber: string) {
        super(name, age)
        this.rollNumber = rollNumber
    }
    registerForCourses(course: string) {
        this.courses.push(course)
    }
}


const student1 = new Student("Huzaifa", 21, "AI")
const student2 = new Student("Jabbar", 219, "Content Writing")
const instructor1 = new Instructor("Zia", 33, 49999)
instructor1.assignCourses("Web3 and Metaverse")
