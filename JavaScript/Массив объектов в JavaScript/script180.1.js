"use strict";
let employees = [
	{
	  name: 'name1',
	  salary: 300,
	},
	{
	  name: 'name2',
	  salary: 400,
	},
	{
	  name: 'name3',
	  salary: 500,
	},
  ];
  
  employees.forEach(function(employee) {
	console.log(employee.name + ' - ' + employee.salary);
  });