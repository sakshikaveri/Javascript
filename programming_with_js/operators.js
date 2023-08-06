
// console.log(2+3)
// console.log(2-3)
// console.log(2/3)
// console.log(2*3)
// console.log(2>3)
// console.log(2<3)
// console.log(2==3)
// console.log(2!=3)

// if-else:
var light="green";
if (light=="green"){
    console.log("Drive")
}
else if(light=="yellow"){
    console.log("Be ready")
}
else if(light=="red"){
    console.log("Don't Drive")
}
else{
    console.log("No signal")
}

// switch
var light="green";
switch(light){
    case 'green':
        console.log("Drive")
        break
    case 'yellow':
        console.log("Be ready")
        break
    case 'red':
        console.log("Don't Drive")
        break
    default:
        console.log("No signal")
        break
}
/*Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical". */
// var age=10
// if(age>=65){
//     console.log("You get your income from your pension")
// }
// else if(age<65 && age>=18){
//     console.log("Each month you get a salary")
// }
// else if(age<18){
//     console.log("You get an allowance")
// }
// else{
//     console.log("The value of the age variable is not numerical")
// }

/*On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days. */

// var day="Sunday"
// switch(day){
//     case 'Monday':
//         console.log('Do something')
//     case 'Tuesday':
//         console.log('Do something')
//     case 'Wednesday':
//         console.log('Do something')
//     case 'Thursday':
//         console.log('Do something')
//     case 'Friday':
//         console.log('Do something')
//     case 'Saturday':
//         console.log('Do something')
//     case 'Sunday':
//         console.log('Do something')
//     default:
//         console.log('There is no such day')
// }

for(var i=1;i<=5;i++){
    console.log(i)
}
console.log('Counting completed!')

for(var i=10;i>0;i--){
    console.log(i)
}
console.log('Happy new year')

var counter=10
while(counter>0){
    console.log(counter);
    counter=counter-1;
}
console.log('Happy new year')

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

// nested loops
for (var i=2022;i<2024;i++){
    for (var j=1;j<=12;j++){
        console.log(i,' Month-'+j)
    }
}

var cubes='SAKSHI';
for(var i=0;i<cubes.length;i++){
    var styles="font-size: 40px; border-radius: 5px;background:pink;color:purple"
    console.log("%c"+cubes[i],styles)
}

// FUNCTIONS
// function without parametrs
function addtwonum(){
    var a=10;
    var b=20;
    var c=a+b;
    console.log(c)
}
addtwonum()

// function with parameters
function addtwonum(a,b){
    var c=a+b;
    console.log(c)
}
addtwonum(4,5)

// for loop
function arraylistitems(arr){
    for (var i=0;i<=arr.length;i++){
        console.log(arr[i])
    }
}
arraylistitems([2,23,35,46,52])

function arraylistitems(arr){
    for (var i=0;i<arr.length;i++){
        if (arr[i]=='red'){
            console.log(i*10 ,"tomato")
        }
        else{
            console.log(i,arr[i])
        }
        
    }
}
var colors=['red','green','blue','orange']
arraylistitems(colors)

/*
Task 1:
Write a function named letterFinder that accepts two parameters: word and match.

Task 2:
Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

Task 3:
Add an if statement inside the for loop whose condition works as follows:

 Access each of the letters inside the passed in word using the counter variable, with word[i]. 

Check if the current word[i] is equal to the value of match.

Task 4:
console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

Task 5:
Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

Task 6:
Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t". */

function letterFinder(word,match){
    for (var i=0;i<word.length;i++){
        if (word[i]==match){
            console.log('Found the',match,'at',i)
        }
        else{
            console.log('---No match found at', i)
        }
    }
}
letterFinder("test","t")

// Objects - object literals and dot notation
// first method using keys-values 
var assistantManager={
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
// console.log(assistantManager.socialSkills)
var arrofkeys=['rangeTilesPerTurn','socialSkills','streetSmarts','health'];
for (var i=0;i<arrofkeys.length;i++){
    console.log(arrofkeys[i],assistantManager[arrofkeys[i]])
}


// second method
// An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example:
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;
console.log(house2)

// Object literals and bracket notations
var assistantManager={
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
// console.log(assistantManager.socialSkills)
var arrofkeys=['rangeTilesPerTurn','socialSkills','streetSmarts','health'];
for (var i=0;i<arrofkeys.length;i++){
    console.log(arrofkeys[i],assistantManager[arrofkeys[i]])
}

// Arrays as objects
var train1=[]
train1.push("wheat")
train1.push("barley")
train1.push("potato")
console.log(train1)
train1.pop()
console.log(train1)

function fun1(one,two,three){
    var student=[]
    student.push(one)
    student.push(two)
    student.push(three)
    console.log(student)
    return student
}
var output=fun1('Sakshi','Vadiraj','Kaveri')
console.log(output)

var decimal=Math.random()
console.log(decimal)
console.log(decimal*10)

// to get a exact number between 1 to 10 using built in methods
var value=Math.random()*10
console.log(value)
var rounded=Math.ceil(value)
console.log(rounded)
var rounded_1=Math.floor(value)
console.log(rounded_1)

// Strings
var greet="Hello"
var name=" Sakshu"
// console.log(greet.pop()) error
console.log(greet + name)
console.log(greet.concat(name))
console.log(greet.length)
console.log(greet.charAt(3))
console.log(greet.indexOf('l'))
console.log(greet.lastIndexOf('l'))
console.log(greet.split(""))
console.log(greet.toUpperCase())
console.log(greet.toLowerCase())

/*Create a new empty array literal and assign it to the variable clothes.
Add 5 of your favorite items of clothing as strings using the push() method.
Remove the fifth piece of clothing from the array using the pop() method.

Add a new piece of clothing using the push() method.

Use console.log to show the third item from the clothes array in the console.

Create a new empty object literal and assign it to the variable favCar.

Using the dot notation, assign a color property to the favCar object and give it a string value with the 
color of your choice.

Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of 
your choice.

Use the console to log the entire favCar object.*/
var clothes=[]
clothes.push('slip')
clothes.push('tee')
clothes.push('jeans')
clothes.push('denim')
clothes.push('skirt')
clothes.pop()
clothes.push('tank-top')
console.log(clothes[2])
var favCar={}
favCar.color='Green'
favCar.working=true
console.log(favCar)

// OBJECT METHODS
var clothes={}
clothes.color='white'
clothes.pattern='checks'
clothes.material='cotton'
console.log(clothes)
clothes.dryclean=function(){
    console.log("They have gone for dry-cleaning")
}
console.log(clothes)
clothes.dryclean()

// typeof
// var test=typeof('Hi hello')
// var test=typeof(2345)
// var test=typeof(true)
// var test=typeof(1<2)
// var test=typeof([1,2,3,4,5]) //output will be object becoz arrays are objects in js
// var test=typeof({firstproperty:1})
var test=typeof(function abc(){console.log('abc')})
console.log(test)

