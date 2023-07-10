/* 1. ----------------Ways to print in javascript---------------
// console.log('Hello')
// alert('HIII')
// document.write('This is document.write method')

// -------------------------2.Console API---------------------
// console.log('Hello',9+7,'SAKSHI')
// console.warn('This is a warning')
// console.error('This is an error')
// console.assert(4==6)
// VM195:1 Assertion failed: console.assert

// -------------------3.Changing HTML document content-----------------
document.getElementById('head').innerHTML='This is the new heading';

document.getElementById("demo").style.fontSize = "35px";
document.getElementById("demo").style.display = "none";
document.getElementById("demo").style.display = "block"; */

/* -----------------Variables in javascript--------------
Variables are Containers for Storing Data.
JavaScript Variables can be declared in 4 ways:

 Automatically
 Using var
 Using let
 Using const

var number1=56
var number2=40
console.log(number1+number2) */

/*-------------------Data types-----------------------*/
//    strings
// var str1 = 'This is a string'
// var str2 = "This is also a string"
// //    numbers
// var num1 = 456;
// var num2 = 56.78
// //    boolean
// var a = true
// var b = false

// //    Objects
// var marks = {
//     sakshi: 99,
//     seema: 67,
//     heema: 80
// }
// console.log(str1)
// console.log(str2)
// console.log(num1)
// console.log(num2)
// console.log(a)
// console.log(b)
// console.log(marks)

// // undefined
// var und
// console.log(und)
// // null
// var n = null
// console.log(n)

// /* There are two main data types in javascript
//  1. Primitive - null, undefined,boolean,symbol,number
//  1. Reference - arrays and objects */
// //  array
// var arr = [1, 2, 3, 4, 5]
// console.log(arr)

/*---------------------Operators in javascript---------------*/

// arithmetic operators
var a=50
var b=5
console.log("The value of a+b is: ",a+b)
console.log("The value of a-b is: ",a-b)
console.log("The value of a*b is: ",a*b)
console.log("The value of a/b is: ",a/b)

//logical operators
// logical AND
console.log(true && true)
console.log(true && false)
console.log(false && false)

// logical OR
console.log(true || true)
console.log(true || false)
console.log(false || false)

//logical NOT
console.log(!false)
console.log(!true)

// assignment operators
var a=70
var c=a
console.log(a==c)
console.log(c+=6)
console.log(c-=6)
console.log(c*=6)
console.log(c/=6)

//comparison operators
var d=90
var e=100
console.log(d>e)
console.log(d<e)
console.log(d<=e)
console.log(d>=e)