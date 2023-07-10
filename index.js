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

// // arithmetic operators
// var a=50
// var b=5
// console.log("The value of a+b is: ",a+b)
// console.log("The value of a-b is: ",a-b)
// console.log("The value of a*b is: ",a*b)
// console.log("The value of a/b is: ",a/b)

// //logical operators
// // logical AND
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)

// // logical OR
// console.log(true || true)
// console.log(true || false)
// console.log(false || false)

// //logical NOT
// console.log(!false)
// console.log(!true)

// // assignment operators
// var a=70
// var c=a
// console.log(a==c)
// console.log(c+=6)
// console.log(c-=6)
// console.log(c*=6)
// console.log(c/=6)

// //comparison operators
// var d=90
// var e=100
// console.log(d>e)
// console.log(d<e)
// console.log(d<=e)
// console.log(d>=e)

/** -----------------------Functions in Javascript */
// function avg(a, b) {
//     c = (a + b) / 2
//     return c
// }
// c1 = avg(1, 2)
// console.log(c1)

/** -----------------------Conditionals in Javascript */
// function age(a){
//     if (a>18){
//         console.log("You can drink")
//     }
//     else{
//         console.log('You cannot drink')
//     }
// }(
// val=age(19))

// // if-else ladder
// a=67
// if (a>60){
//     console.log("You can drink, you are old")
// }
// else if(a>40){
//     console.log('Oh you are over 40')}
// else{
//     console.log('You are younger than 60 and 40')
// }

/**---------------------Loops -------- */
// var arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr)
// for (var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })

// let j=0
// while(j<arr.length){
//     console.log(arr[j])
//     j++
// }

// let i=0
// do{
//     console.log(arr[i])
//     i++
// } while(i<arr.length)

/**-------------------Break and continue------------ */
var arr=[1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++){
    if(i==2){
        break
    }
    console.log(arr[i])
}

var arr=[1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++){
    if(i==2){
        continue
    }
    console.log(arr[i])
}
/**-------------------Array methods------------ */
