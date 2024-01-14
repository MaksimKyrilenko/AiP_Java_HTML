"use strict";
"use strict";
function func() {
	return function() {
		return function() {
      return function() {
        return function() {
          return '!';
        };
		};
	};
}
}
console.log(func()()()()())