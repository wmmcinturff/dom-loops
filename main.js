"use strict";

//console.log("Let's start DOM LOOPS")

//const ageCheck = (age) => {
  //  if (age < 21) {
        //console.log("No drinks for you!")
  //  } else {
 //       console.log("PARTAYY!")
    //}
//}
 //ageCheck(44)

 //const lengthOutput = (strang) => {
 //    return strang.length
 //}

 //console.log(lengthOutput("Wanda"))

// const quoteFinder = (testString) => {
     //return "winter is coming" .indexOf(testString)
 //}

 //console.log(quoteFinder('is'));


 const employee = {
     firstName: 'Wanda',
     lastName: 'McInturff',
     role: 'instructor',
     accountNumber: '081-238565',
     isManager: false,
     titles: ['Headmistress', 'Awesomesauce'],
     accolade: {
         title: 'Teacher of the Year',
         dateEarned: '4/30/2020',
         isCool: true
     }
 }
 const employeeStatusAssign = (employee) => {
    if (employee.firstName[0] === 'W') {
        employee.status = 'vip'
    }
    else {
        employee.status = 'peasant'
    }


    }
 //console.log(employee.firstName)

// const keyToCheck = 'accolade';
 
// console.log(employee[keyToCheck]['isCool']);


