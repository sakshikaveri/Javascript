
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