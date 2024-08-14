
////! Grade Calculator
//? Create a program that calculates the average grade from an array of grades and determines the corresponding letter grade.
//TODO Define an Array: Define an array containing a list of 5 grades.
const classGrades =[ 88, 97, 93, 78, 79]
let gradeAvg = 0;
//TODO Create a Function: Create a function to calculate the average of the grades.
//function to sum classGrades/classGrades.length

gradeAverage(classGrades)
console.log(gradeAvg)
letterGrade()

function gradeAverage(classGrades){
    let sum = 0;
    for(let i = 0; i < classGrades.length; i++){
            sum += classGrades[i];  
        }
    gradeAvg = sum/classGrades.length
}

//TODO Create Another Function: Create another function to determine the letter grade based on the average.
function letterGrade(){

    if(gradeAvg >= 90){
        console.log("This is an A average,");
    }else if (gradeAvg >=80 && gradeAvg <= 89){
        console.log("This is a B average.");
    }else if (gradeAvg >= 70 && gradeAvg <= 79){
        console.log("This is a C average.");
    }else if (gradeAvg >=75 && gradeAvg <= 68){
        console.log("This is a D average")
    }else if (gradeAvg <=67){
        console.log("This is an F average.")
    }
}


//TODO Use if-else Statements: Use if-else statements inside the function to determine the letter grade.
//* Output Results: Use console.log to display the average grade and the corresponding letter grade.