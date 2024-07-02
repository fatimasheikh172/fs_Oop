#! /usr/bin/env node

import inquirer from "inquirer"

class Student{
    name:string
    constructor(n:string){
        this.name=n
    }
}

class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}

const person = new Person()

const programStart = async (person:Person) =>{
    do{
    console.log("......Welcome......");
    const ans = await inquirer.prompt(
        {
            name: "select",
            type: "list",
            message: "Whom would you like to interect with?",
            choices: ["staff","student","exit"]
        }
    )
    if(ans.select == "staff"){
        console.log("\nYou approch the staff room")
    }

    else if(ans.select == "student" ){
        const ans = await inquirer.prompt(
            {
                name: "student",
                type: "input",
                message: "Enter the student's name you wish to engage with:"
            }
        )
        const student = person.students.find(val => val.name == ans.student)
        if(!student){
            const name = new Student(ans.student)
            person.addStudent(name)
            console.log(`\nHello i am ${name.name}.Nice to meet you`)
            console.log("\nNew student added")
            console.log("\nCurrent student list")
            console.log(person.students);    
        }else {
            console.log(`\nHello i am ${student.name}.Nice to see you again\n`)
            console.log("Existing student list\n")
            console.log(person.students)
        }
    }else if(ans.select == "exit"){
        console.log("\n......Exiting the program......\n")
        process.exit()
    }
    }while(true)
}
programStart(person);