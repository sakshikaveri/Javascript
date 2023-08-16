
// console.log(2+3)
// console.log(2-3)
// console.log(2/3)
// console.log(2*3)
// console.log(2>3)
// console.log(2<3)
// console.log(2==3)
// console.log(2!=3)

// // if-else:
// var light="green";
// if (light=="green"){
//     console.log("Drive")
// }
// else if(light=="yellow"){
//     console.log("Be ready")
// }
// else if(light=="red"){
//     console.log("Don't Drive")
// }
// else{
//     console.log("No signal")
// }

// // switch
// var light="green";
// switch(light){
//     case 'green':
//         console.log("Drive")
//         break
//     case 'yellow':
//         console.log("Be ready")
//         break
//     case 'red':
//         console.log("Don't Drive")
//         break
//     default:
//         console.log("No signal")
//         break
// }
// /*Complete the following steps to create: Are You Old Enough? 
// Declare a variable age using the var keyword and set it to the number 10.

// Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

// Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

// Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

// Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical". */
// // var age=10
// // if(age>=65){
// //     console.log("You get your income from your pension")
// // }
// // else if(age<65 && age>=18){
// //     console.log("Each month you get a salary")
// // }
// // else if(age<18){
// //     console.log("You get an allowance")
// // }
// // else{
// //     console.log("The value of the age variable is not numerical")
// // }

// /*On the next line, define a new variable, name it day, and set its value to "Sunday".

// Start coding a switch statement, passing the day variable as the expression to evaluate.

// Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

// At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

// Finally, update the console.log calls for each case, based on whatever activity you have on each of the days. */

// // var day="Sunday"
// // switch(day){
// //     case 'Monday':
// //         console.log('Do something')
// //     case 'Tuesday':
// //         console.log('Do something')
// //     case 'Wednesday':
// //         console.log('Do something')
// //     case 'Thursday':
// //         console.log('Do something')
// //     case 'Friday':
// //         console.log('Do something')
// //     case 'Saturday':
// //         console.log('Do something')
// //     case 'Sunday':
// //         console.log('Do something')
// //     default:
// //         console.log('There is no such day')
// // }

// for(var i=1;i<=5;i++){
//     console.log(i)
// }
// console.log('Counting completed!')

// for(var i=10;i>0;i--){
//     console.log(i)
// }
// console.log('Happy new year')

// var counter=10
// while(counter>0){
//     console.log(counter);
//     counter=counter-1;
// }
// console.log('Happy new year')

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')

// // nested loops
// for (var i=2022;i<2024;i++){
//     for (var j=1;j<=12;j++){
//         console.log(i,' Month-'+j)
//     }
// }

// var cubes='SAKSHI';
// for(var i=0;i<cubes.length;i++){
//     var styles="font-size: 40px; border-radius: 5px;background:pink;color:purple"
//     console.log("%c"+cubes[i],styles)
// }

// // FUNCTIONS
// // function without parametrs
// function addtwonum(){
//     var a=10;
//     var b=20;
//     var c=a+b;
//     console.log(c)
// }
// addtwonum()

// // function with parameters
// function addtwonum(a,b){
//     var c=a+b;
//     console.log(c)
// }
// addtwonum(4,5)

// // for loop
// function arraylistitems(arr){
//     for (var i=0;i<=arr.length;i++){
//         console.log(arr[i])
//     }
// }
// arraylistitems([2,23,35,46,52])

// function arraylistitems(arr){
//     for (var i=0;i<arr.length;i++){
//         if (arr[i]=='red'){
//             console.log(i*10 ,"tomato")
//         }
//         else{
//             console.log(i,arr[i])
//         }
        
//     }
// }
// var colors=['red','green','blue','orange']
// arraylistitems(colors)

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

// function letterFinder(word,match){
//     for (var i=0;i<word.length;i++){
//         if (word[i]==match){
//             console.log('Found the',match,'at',i)
//         }
//         else{
//             console.log('---No match found at', i)
//         }
//     }
// }
// letterFinder("test","t")

// // Objects - object literals and dot notation
// // first method using keys-values 
// var assistantManager={
//     rangeTilesPerTurn: 3,
//     socialSkills: 30,
//     streetSmarts: 30,
//     health: 40,
//     specialAbility: "young and ambitious",
//     greeting: "Let's make some money"
// }
// // console.log(assistantManager.socialSkills)
// var arrofkeys=['rangeTilesPerTurn','socialSkills','streetSmarts','health'];
// for (var i=0;i<arrofkeys.length;i++){
//     console.log(arrofkeys[i],assistantManager[arrofkeys[i]])
// }


// // second method
// // An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, and use the assignment operator to add values to those properties; for example:
// var house2 = {};
// house2.rooms = 4;
// house2.color = "pink";
// house2.priceUSD = 12345;
// console.log(house2)

// Object literals and bracket notations
// var assistantManager={
//     rangeTilesPerTurn: 3,
//     socialSkills: 30,
//     streetSmarts: 30,
//     health: 40,
//     specialAbility: "young and ambitious",
//     greeting: "Let's make some money"
// }
// // console.log(assistantManager.socialSkills)
// var arrofkeys=['rangeTilesPerTurn','socialSkills','streetSmarts','health'];
// for (var i=0;i<arrofkeys.length;i++){
//     console.log(arrofkeys[i],assistantManager[arrofkeys[i]])
// }

// // Arrays as objects
// var train1=[]
// train1.push("wheat")
// train1.push("barley")
// train1.push("potato")
// console.log(train1)
// train1.pop()
// console.log(train1)

// function fun1(one,two,three){
//     var student=[]
//     student.push(one)
//     student.push(two)
//     student.push(three)
//     console.log(student)
//     return student
// }
// var output=fun1('Sakshi','Vadiraj','Kaveri')
// console.log(output)

// var decimal=Math.random()
// console.log(decimal)
// console.log(decimal*10)

// // to get a exact number between 1 to 10 using built in methods
// var value=Math.random()*10
// console.log(value)
// var rounded=Math.ceil(value)
// console.log(rounded)
// var rounded_1=Math.floor(value)
// console.log(rounded_1)

// Strings
// var greet="Hello"
// var name=" Sakshu"
// // console.log(greet.pop()) error
// console.log(greet + name)
// console.log(greet.concat(name))
// console.log(greet.length)
// console.log(greet.charAt(3))
// console.log(greet.indexOf('l'))
// console.log(greet.lastIndexOf('l'))
// console.log(greet.split(""))
// console.log(greet.toUpperCase())
// console.log(greet.toLowerCase())

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
// var clothes=[]
// clothes.push('slip')
// clothes.push('tee')
// clothes.push('jeans')
// clothes.push('denim')
// clothes.push('skirt')
// clothes.pop()
// clothes.push('tank-top')
// console.log(clothes[2])
// var favCar={}
// favCar.color='Green'
// favCar.working=true
// console.log(favCar)

// OBJECT METHODS
// var clothes={}
// clothes.color='white'
// clothes.pattern='checks'
// clothes.material='cotton'
// console.log(clothes)
// clothes.dryclean=function(){
//     console.log("They have gone for dry-cleaning")
// }
// console.log(clothes)
// clothes.dryclean()

// typeof
// // var test=typeof('Hi hello')
// // var test=typeof(2345)
// // var test=typeof(true)
// // var test=typeof(1<2)
// // var test=typeof([1,2,3,4,5]) //output will be object becoz arrays are objects in js
// // var test=typeof({firstproperty:1})
// var test=typeof(function abc(){console.log('abc')})
// console.log(test)

// errors
// reference error
// console.log(c+d) //ReferenceError: c is not defined
//syntax error
// var a="hell; SyntaxError: Invalid or unexpected token
//type error
// (5).pop  //array method on a number

// try{
//     console.log(c+d)
// }
// catch(err){
//     console.log("This is a message thrown for error")
// }
// console.log("The code didn't stop.")

// console.log(username) reference error
// var any "Hi";
// console.log(any) syntax error
// 'hello'.pop()  type error

// console.log((10).toString(2)); // '1010'
// console.log((10).toString(8)); // '12'
// console.log((10).toString(100)); // 'range error'

// var a;
// console.log(a)  //undefined
// var student={
//     scores:100
// }
// console.log(student.Scores)  //undefined
// var letters='abc';
// console.log(letters.match(/d/))  //null
// var b=""
// console.log(b) //empty string


// function addTwoNums(a,b){
    
//     try{
//         if (typeof(a)!='number'){
//             throw new ReferenceError('the first argument is not a number')
//         }
//         else if(typeof(b)!='number'){
//             throw new ReferenceError('the second argument is not a number')
//         }
//         else{
//             console.log(a+b)
//         }
//     }
//     catch(err){
//         console.log("Error!", err)
//     }
// }
// addTwoNums(5,"5")
// console.log("It still works")

// Defensive programming
// function letterFinder(word, match) {
//     var condition1= typeof(word) == 'string' && word.length >= 2
//     var condition2= typeof(match)=='string' && match.length==1
//     if (condition1==true && condition2 == true){
//         for(var i = 0; i < word.length; i++) {
//         if(word[i] == match) {
//             //if the current character at position i in the word is equal to the match
//             console.log('Found the', match, 'at', i)
//         } 
//         else {
//             console.log('---No match found at', i)
//         }
//     }

//     }
//     else{
//         console.log("Please pass correct arguments to the function.")
//     }
    
// }
// letterFinder("cat", "c")

// Functional programming
// currencyone=100
// rate=1.2
// currencytwo=0
// function currency_conversion(amount,rate){
//     currencytwo=amount*rate
// }
// currency_conversion(currencyone,rate)
// console.log(currencytwo)

// console.log('Hello')
// function consoleLog(val){
//     console.log(val)
//     return val
// }
// consoleLog('Goodbye')

// function example(){
//     console.log('1')
//     console.log('2')
//     console.log('3')
//     example()     //----> infinite loop chalega
// }
// example()


// Recursion
// var counter=1
// function example(){
//     console.log(counter)
//     counter=counter+1
//     if (counter>5){
//         return;
//     }
//     example()     //----> infinite loop chalega
// }
// example()

// First class functions
// function addTwoNums(a, b) {
//     console.log(a + b)
// }
// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() { return 42 };
// var useRandom = true;
// var getNumber;
// if(useRandom) {
//     getNumber = randomNum
// } else {
//     getNumber = specificNum
// }
// addTwoNums(getNumber(), getNumber())

// Task 1: Build a function-based console log message generator
// Task 1: Build a function-based console log message generator
// function consoleStyler(color,background,fontSize,txt){
//     var message = "%c" + txt;
//     var style = 'color: { color };'
//     style += 'background: {background};'
//     style += 'font-size: {fontSize};'
//     console.log(message,style)
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = 'color: tomato; font-size: 50px';
//     if (reason == 'birthday') {
//         console.log('%cHappy birthday', fontStyle)
//     }
//     else if (reason == 'champions') {
//         console.log('%cCongrats on the title!', fontStyle)
//     }
//     else {
//         console.log(message, style)
//     }
    
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
// celebrateStyler('birthday')


// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
//     consoleStyler(color, background, fontSize, txt);  
//     celebrateStyler(reason);
// }
// // Call styleAndCelebrate
// styleAndCelebrate('ef7c8e','fae8e0','30px','You made it!','champions'
// )

// var keyword
// console.log(user)
// var user
// var user='Sakshi'
// console.log(user)
// var user='Seema'
// console.log(user)

// let keyword
// console.log(a)
// let a   //error cannot access a without initialisation
// console.log(a)   // undefined now
// // let a='sakshi'  SyntaxError: Identifier 'a' has already been declared
// a='sakshi'
// console.log(a)

//const keyword
// console.log(user)
// const user // error const ke time pe we have to always initialise

// console.log(user)
// const user='sakshi'  //ReferenceError: Cannot access 'user' before initialization

// const user='sakshi'
// console.log(user)
// user='ajay'  //TypeError: Assignment to constant variable.

// OOP
// var purchase1={
//     shoes:100,
//     tax:1.2,
//     calculation:function(){
//         var totalcost=this.shoes*this.tax
//         console.log("Total price is:",totalcost)
//     }
// }
// purchase1.calculation()

// var purchase2={
//     shoes:50,
//     tax:1.2,
//     calculation:function(){
//         var totalcost=this.shoes*this.tax
//         console.log("Total price is:",totalcost)
//     }
// }
// purchase2.calculation()

// Polymorphism
// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

// console.log(new Date())

// Constructors
// To use a constructor function, I must prepend it with the operator new.
// function icecream(flavour){
//     this.flavour=flavour
//     this.meltit=function(){
//         console.log(`The flavour ${this.flavour} has melted`)
//     }
// }
// let obj1=new icecream('kiwi')
// obj1.meltit()
// console.log(obj1)

// Inheritance-- bird object is the prototype
// var bird={
//     canFly: true,
//     hasWings:true,
//     hasFeathers:true
// }

// var eagle=Object.create(bird)
// console.log(eagle)
// console.log('Eagle has wings:',eagle.hasWings)
// console.log('Eagle has feathers:',eagle.hasFeathers)
// console.log('Eagle can fly:',eagle.canFly)

// var penguin=Object.create(bird)
// console.log(penguin)
// penguin.canFly=false
// penguin.hasFeathers=false
// console.log('Penguin has wings:',penguin.hasWings)
// console.log('Penguin has feathers:',penguin.hasFeathers)
// console.log('Penguin can fly:',penguin.canFly)

// Classes

// class Train {
//     constructor(color,isWorking){
//         this.color=color
//         this.isWorking=isWorking
//     }
// }
// console.log(new Train('blue',true))  //not preferred - object ka name hi nai h
// let myFirstTrain= new Train('red',false)
// console.log(myFirstTrain)
// console.log(this)

// class Train {
//     constructor(color,isWorking){
//         this.color=color
//         this.isWorking=isWorking
//     }
//     toggleWorking(){
//         this.isWorking=!this.isWorking
//         console.log("Is the train working",this.isWorking)
//     }
//     status(){
//         this.status=this.isWorking
//         console.log("What is the train status",this.status)
//     }
//     getSelf(){
//         console.log("Display the contents of the object",this)
//     }
//     getprototype(){
//         var proto=Object.getPrototypeOf(this)
//         console.log(proto)
//     }
// }

// let myFirstTrain= new Train('red',false)
// // var train4=new Train('blue',false)
// // console.log(myFirstTrain)
// // myFirstTrain.toggleWorking()
// myFirstTrain.status()
// // myFirstTrain.getSelf()
// // myFirstTrain.getprototype()
// // train4.getprototype()

// class HighspeedTrain extends Train{
//     constructor(color,isWorking,passengers, highSpeedOn){
//         super(color,isWorking),
//         this.passengers=passengers,
//         this.highSpeedOn=highSpeedOn
//     }
//     toggleSpeed(){
//         this.highSpeedOn=!this.highSpeedOn
//         console.log("The high speed is: ",this.highSpeedOn)
//     }
//     toggleWorking() {
//         super.toggleWorking();
//         super.status();
//         console.log('Lights are 100% operational.');
//     }
// }
// var train5 = new Train('blue', false);
// var highSpeed1 = new HighspeedTrain(200, false, 'green', false);
// console.log(highSpeed1)
// highSpeed1.toggleSpeed()
// highSpeed1.toggleWorking()

// Task 1: Code a Person class
// class Person{
//     constructor(name = 'Tom', age = 20, energy = 100) {
//         this.name = name
//         this.age = age
//         this.energy=energy
//     }
//     sleep() {
//         this.energy+=10        
//     }
//     doSomethingFun() {
//         this.energy-=10
//     }
// }
// // Task 2: Code a Worker class
// class Worker extends Person{
//     constructor(name,age,energy,xp = 0, hourlyWage = 10) {
//         // super(name, age, energy)
//             this.xp = xp
//             this.hourlyWage=hourlyWage
        
//             // this.sleep()
//             // this.doSomethingFun()
//     }
//     goToWork() {
//         this.xp=xp+10
//     }
// }

// // Task 3: Code an intern object, run methods
// function intern() {
//     var intern = new Worker(name = 'Bob', age = 21, energy = 110, xp = 0, hourlyWage = 10);
//     intern.goToWork()
//     return intern
// }

// // Task 4: Code a manager object, methods
// function manager() {
//     var manager = new Worker(name = 'Alice', age = 30, energy = 120, xp = 100, hourlyWage = 30)
//     manager.doSomethingFun()
//     return manager
// }

// Destructuring
// let {PI}=Math
// console.log(PI)
// console.log(PI===Math.PI)
// // console.log(Math)
// PI=2
// console.log(PI)
// console.log(PI===Math.PI)

// let family=['sunny','darsh','priyanka','sai']
// for(var member of family ){
//     console.log(member)
// }

// var car={
//     engine: true,
//     color:'red',
//     speed:'slow'
// }

// var bmw=new car  //typeerror
// const bmw=Object.create(car)
// bmw.speed='fast'
// console.log("BMW object: ",bmw)

// for (prop in bmw){
//     console.log(prop)
// }

// for (prop of Object.keys(bmw)){
//     console.log(prop,':',bmw[prop])
// }

// let greet='Hello'
// let person='world'
// console.log(`${greet} ${person} !`)
// console.log(`${1+6} stars`)

// Array
// foreach method
const fruits=['apple','kiwi','banana','avacado','orange']
function appendindex(fruit,index){
    console.log(`${index} ${fruit}`)
}
fruits.forEach(appendindex)
// the forEach() method accepts a function that will work on each array item. 
// That function's first parameter is the current array item itself, and the second (optional) 
// parameter is the index.

// filter method
// It filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums=[10,20,30,40,50,60]
console.log(nums.filter(function(nums){
    return nums>20
}))

// // map method
// This method is used to map each array item over to another array's item, 
// based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

console.log([0,10,20,30,40].map(function(num){
    return num/10
}))

// task to convert objects into arrays
const result=[]
const car={
    speed:'slow',
    color:'red'
}
const carkeys=Object.keys(car)
console.log(carkeys)
carkeys.forEach(function(keys){
    console.log(keys)
    result.push(keys,car[keys])
})
console.log(result)

// working with maps
// A map can feel very similar to an object in JS.
// However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
let bestboxers=new Map()
bestboxers.set(1,'Winner')
bestboxers.set(2,'Runner-up')
bestboxers.set(3,'Secomd runner up')
console.log(bestboxers)
console.log(bestboxers.get(1))

//working with sets
// sets doesn't have repeated items
const Fruits=['apple','kiwi','banana','avacado','orange','orange','banana']
const output=new Set(Fruits)
console.log(output)

// spread and rest operator
// spread operator
const snacks = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const obj1=[...snacks,...berries]
console.log(obj1)

const flying = { wings: 2 }
const Car = { wheels: 4 }
const flyingCar={...flying,...Car}
console.log(flyingCar)

const meal=['soup','steak']
const [starter]=meal
console.log(starter)



class Animal {

}

class Dog extends Animal {
    constructor() {
        super()
        this.noise = "bark";
    }

    makeNoise() {
      return this.noise;
    }
}

class Wolf extends Dog {
    constructor() {
        super();
        this.noise = "growl";
    }
}

var result1 = new Wolf();
console.log(result1.makeNoise());

