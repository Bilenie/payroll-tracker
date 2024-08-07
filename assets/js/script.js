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
  const first = prompt("Employee First Name");
  const last = prompt("Employee Last Name");
  const salary = prompt("Employee Salary")

// add this as a condition if user input 0 or none. added an alert to inform the user if the entered salary is not numeric.
    
if (isNaN(salary)){
 
  alert("Salary should be a number.");
}

  //Create employee object
  // parse the salary.
  const employee = {
    firstName: first,
    lastName: last,
    salary:parseFloat(salary),
  }
// return an array of employees  objects.
  employees.push(employee);
// add a confirm to give an option to add(yes/no/cancel/ok).
  onGoing = confirm("would you like to add another employee?");

  }
  return employees;

};

// Function to display average salary and random employee
const displayEmployeeData = function(employeesArray) {
  displayAverageSalary(employeesArray);
  getRandomEmployee(employeesArray);
};

// Function to calculate and display average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;

  for (let index = 0; index < employeesArray.length; index++) {
    totalSalary += employeesArray[index].salary;
  }

  const avgSalary = totalSalary / employeesArray.length;
  console.log(`Employee average salary is ${avgSalary}`);
};

// Function to select and display a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
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
