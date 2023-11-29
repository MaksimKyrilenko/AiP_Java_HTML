"use strict";
let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];
for (let i = 0; i < data.length; i++) {
	for (let key in data[i]) { 
	  for (let j = 0; j < data[i][key].length; j++) {
		console.log(data[i][key][j]);
	  }
	}
  }
  