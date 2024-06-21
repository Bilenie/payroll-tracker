// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // Should return an array of employees objecs so add a const here.
  const employees = []
//set a flag to let continue if its true and wrap it in a loop.
  let onGoing = true;
  // TODO: Get user input to create and return an array of employee objects.

  while (onGoing) {
  const first = prompt("employee first name");
  const last = prompt("employee last name");
  const salary = prompt("employee salary")

// add this as a condition if user input 0 or none.
  if (isNaN(salary)){
    salary = 0;
  }

  // create employee object
  // parse the salary.
  const employee = {
    firstName:first,
    lastName:last,
    salary:parseFloat(salary),
  }
// return an array of employees  objects.
  employees.push(employee);
// add a confirm to give an option to add(yes/no/cancel/ok).
  onGoing = confirm("would you like to add another employee?");
}

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // loop through the employee and provide based on the individual employee and add employee salary to the average.
let avg = 0;
for (let index = 0; index<employeesArray.length; index++) {
const employee = array[index];
avg += employee.salary 

}
avg = avg / employeesArray.length;

console.log(`Employee average salary is ${avg}`)
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
var employee = employeesArray[Math.floor(Math.random()*employeesArray.length)];
console.log(`Random employee ${employee.firstName} ${employee.lastName}`)
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
