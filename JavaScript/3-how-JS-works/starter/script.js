///////////////////////////////////////
// Lecture: Hoisting

// Below Code represents that Hoisting in javascript can only be achieve in function declaration and not function expression.

/*calculateAge(1990);

function calculateAge(year) {
    console.log(2018 - year);
}

// retirementCalculator(1993);
var retirementCalculator = function(year) {
    console.log(65 - (2018 - year));
}

retirementCalculator(1993);*/

// Hoisting in Variable

/*Below is the example of variable in Global execution context and local context.*/

/*console.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);*/



















///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}




///////////////////////////////////////
// Lecture: The this keyword









