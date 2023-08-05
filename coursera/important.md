Javascript is a high level language that must be converted to binary language to be 
understood by the computers.

Comments in JavaScript: the syntax
There are two varieties of comments in JavaScript: 

Single-line comments- A single-line comment is created when you add two forward-slash 
characters one after the other, without spaces. For.eg:- // this is a comment!
Multi-line comments-A multi-line comment, as its name says, spans for several lines 
of code and is created with a forward slash and a star.  For eg:- 
/*
this
is
a
multi-line
comment
*/

console.log function to output the words "Hello, World".
1) console.log("Hello, World");
2) console.log("%cHello World","color:blue;font-size:40px");
If you add the %c right after the " character, you can then style the console output 
by adding the , character after the second ", and then, inside another pair of " and "
characters, use valid CSS code to style the words you want to output in the console.

To output multiple words into the console, you can join them using the + character, 
formally known as the "concatenation operator" when we're joining pieces of text, or
the "addition operator", for performing the mathematical operation of adding two numbers.

**VARIABLES**:
var person;
person='Sakshi';
console.log("Hello",person);
var greeting='Hi';
person='Saurabh';
console.log(greeting,person);

**DATA TYPES**:
Primitive data types:
String, number, Boolean, BigInt, Symbol, Null, undefined
Null- absence of value, undefined- a variable which is not yet assigned a value

**OPERATORS**:
assignment - =
Arithmetic - (+,-,/,*)
comparison - (>,<,!=,==)  NOTE- (==,=) are different
logical- (&&,||,!,)
AND- In JavaScript, this operator consists of two ampersand symbols together: &&.
OR- The logical OR operator in JavaScript consists of two pipe symbols together: ||.
NOT -In JavaScript, the logical NOT operator's symbol is the exclamation mark: !.
The modulus operator is another mathematical operator in JavaScript. 
It returns the remainder of division. %
The equality operator checks if two values are equal.

The + operator, when used with number data type, adds those values together.
However, the + operator is also used to join string data type together.

Combining strings and numbers using the + operator.
Here, JavaScript tries to help by converting the numbers to strings, and then 
concatenating the number and the string together, ending up with a string value.
NOTE- The process of this "under-the-hood" conversion of values in JavaScript is 
referred to as *"coercion"*. JavaScript coerces a number value to a string value -
so that it can run the + operator on disparate data types.



100=='100' will return true because the equality operators only compares the values
and not the data type
wherein === strict equality operators checks both value and data type.
