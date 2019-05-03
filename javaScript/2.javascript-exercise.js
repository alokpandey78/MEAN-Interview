console.log('1.',1 == '1')
console.log("2.",1 === '1')
console.log("3.",1=== parseInt('1'))
// 1. TRUE because it's an auto-type conversion and it checks only value not type.
// 2. FALSE because it's not auto-type conversion and it check value and type both.
// 3. TRUE.
 
console.log("4",0 == false); 
console.log("5",0 === false);
console.log("6",1 == "1"); 
console.log("7",1 === "1"); 
 //4. true, because both are same type.
 //5. false, because both are of a different type.
 //6. true, automatic type conversion for value only.
 //7. false, because both are of a different type.
 
 console.log('8',null == undefined); 
 console.log('9',null === undefined); 
 console.log('10','0' == false); 
 console.log('11','0' === false);
 console.log('12',1=== parseInt("1")); 

 //8  true.
 //9  false.
 //10 true.
 //11 false.
 //12 true.

 var bar = true;
console.log(bar + 0);   
console.log(bar + "xyz");  
console.log(bar + true);  
console.log(bar + false);  
// 1, "truexyz", 2, 1

//1.? What is the difference between undefined and not defined in 
var x; // declaring x
console.log(x); //output: undefined
// console.log(y);  // Output: ReferenceError: y is not defined

// 2.? what would be output
var y1 = 1;
  if (function f(){}) {
    y1 += typeof f;
  }
  console.log(y1); 
/*
// 1undefined
eval(function f(){}) returns function f(){} (which is true)   
if statement, executing typeof f returns undefined because the if statement code executes at run time, 
and the statement inside the if condition is evaluated during run time.
  
  3.?
*/
  var k = 1;
  if (1) {
    function foo(){};
    k += typeof foo;
  }
  console.log(k); 
  // output 1function

  /* 
  4.? Write a function curring function
  console.log(mul(2)(3)(4)); // output : 24 
  */

 function multiply (x) {
  return function (y) { // anonymous function 
      return function (z) { // anonymous function 
          return x * y * z; 
      };
  };
}

/* 5.? How to empty an array */
var arrayList =  ['a','b','c','d','e','f'];
// Method 1
/* 
> arrayList = []; // Empty the array 
> arrayList.length = 0;
> arrayList.splice(0, arrayList.length);

while(arrayList.length){
  arrayList.pop();
} 
*/

/* 6.? How do you check if an object is an array or not? */
var arrayList1 = [1,2,3];
Array.isArray(arrayList1);

var output = (function(x){
  console.log('x=',x,'type of',typeof x);
  
  delete x;
  return x;
})(2);
console.log(output);
// 2
// The delete operator is used to delete properties from an object.

/* 7.? What will be the output of the code below? */
var x1 = { foo : 1};
var output2 = (function(){
    delete x1.foo;
    return x1.foo;
  })();
  console.log(output2);
//undefined
//x1 is an object

/* 8.? What will be the output of the code below? */
var Employee = {
  company: 'xyz'
}
var emp1 = Object.create(Employee);
delete emp1.company
console.log(emp1.company);
// xyz
console.log(emp1.hasOwnProperty('company')); //output : false
// emp1 object has company as its prototype property. The delete operator doesn't delete prototype property.

/* 9.? what would be output */
var trees = ["redwood","bay","cedar","oak","maple"];
delete trees[3];
console.log(trees);
//  ["redwood", "bay", "cedar", empty, "maple"] in chrome
// [ 'redwood', 'bay', 'cedar', <1 empty item>, 'maple' ] in node terminal
trees.push();
console.log(trees.length); // 5

/* 10.? What would be output */
var z = 1, y = z = typeof y;
console.log(y); 
// undefined

/* 11.? What would be output */
var foo = function bar(){ return 12; };
// typeof bar(); 

// O/P Reference Error  below is the write

var bar = function(){ return 12; };
typeof bar(); 
console.log("typeof bar()",bar());
 

// difference between the function declarations below?
var foo1 = function(){ 
    // Some code
}; 
 function bar1(){ 
    // Some code
}; 
// The main difference is the function foo is defined at run-time whereas function bar is defined at parse time.
