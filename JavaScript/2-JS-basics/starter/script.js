/*************************************
* Variables and DataType declaration
*/
//var firstName = 'Anand';
/*console.log(firstName);

var lastName = 'Jha';

var age = 28;

var fullAge = true;
console.log(fullAge);*/

/*********************************
*Mutation and type coercian
*/

/*var job = 'Software Developer';
var isMarried = true;

alert(firstName+' '+lastName+' is a '+age+' years old '+job+'. Is he married ?'+isMarried);

var middlename = prompt('what is his middle Name ?');
console.log(firstName+' '+middlename+' '+lastName);*/

// Multiple Operators
/*var now = 2018;
var yearAnand = 1991;
var fullAge = 18;

var isFullAge = now - yearAnand >= fullAge;
console.log(isFullAge);

// Grouping
var ageAnand = now - yearAnand;
var ageVinay = 35;
var averageAge = (ageAnand + ageVinay) / 2;
console.log(averageAge);

// Multiple Assignment
var x, y ;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);*/

// CODING CHALLENGE 1 (COMPARING MARK AND JOHN BMI)
/*var weightMark = 76;
var weightJohn = 80;
var heightMark = 1.4;
var heightJohn = 1.7;

var bmiMark = weightMark / (heightMark * heightMark);
var bmiJohn = weightJohn / (heightJohn * heightJohn);

var isBmiMarkHigher = bmiMark > bmiJohn;
console.log('Is Mark BMI Higher than John? '+isBmiMarkHigher);

if(bmiMark > bmiJohn) {
    console.log('Mark is overweight than John');
} else {
    console.log('John is overweight than Mark');
}

var finamMessage = bmiMark > bmiJohn ? 'Mark is greater than Jon' : 'Jon is greater than Mark';
console.log(finamMessage);

var job = 'teacher';
switch (job) {
    case 'teacher':
        console.log(firstName+' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName+' drives the uber in india');
        break;
}

// Truthy and Falsy values and equality operators
//Falsy values : undefined, jull, 0, '',NaN
//Truthy values : not falsy values

var height = 65;
if(height || height === 0) {
    console.log('Height is defined');
}else {
    console.log('Height has not beeen defined');
}*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

/*var teamJohn1stGame = 89, teamJohn2ndGame = 120, teamJohn3rdGame = 103;
var teamMike1stGame = 116, teamMike2ndGame = 94, teamMike3rdGame = 123;
var teamMary1stGame = 97, teamMary2ndGame = 134, teamMary3rdGame = 105;

// calculate the average
var teamJohnAvg = (teamJohn1stGame + teamJohn2ndGame + teamJohn3rdGame)/3;
var teamMikeAvg = (teamMike1stGame + teamMike2ndGame + teamMike3rdGame)/3;
var teamMaryAvg = (teamMary1stGame + teamMary2ndGame + teamMary3rdGame)/3;
if(teamJohnAvg > teamMikeAvg && teamJohnAvg > teamMaryAvg) {
    console.log('TeamJohn won the match with an average score ='+teamJohnAvg);
}else if(teamMikeAvg > teamJohnAvg && teamMikeAvg > teamMaryAvg){
    console.log('TeamMike won the match with an average score ='+teamMikeAvg);
}else if(teamMaryAvg > teamJohnAvg && teamMaryAvg > teamMikeAvg) {
    console.log('teamMary won the match with an average score ='+teamMaryAvg);
}else {
    console.log('Match was drawn');
}*/


/**********************************************
*Function
*/

/*function calculateAge(birthYear) {
    return 2018 - birthYear;
}

//console.log(calculateAge(1991));

function yearsUntilRetirement(year, firstname) {
    var age = calculateAge(year);
    var retirement = 60 - age;
    if(retirement > 0 ) {
    console.log(firstname+' retires in '+retirement+' years');
         }else {
             console.log(firstname+' already retired');
         }
}

yearsUntilRetirement(1991, 'Anand');
yearsUntilRetirement(1948, 'ramesh')*/

/*******************************************
*FUNCTION STATEMENT AND FUNCTION EXPRESSION
*/
 /*var whatDoYouDo = function(job, firstName) {
     switch (job) {
         case 'teacher':
             return firstName+' is a teacher';
         case 'driver':
             return firstName+' drives cab'
         case 'designer':
             return firstName+' develop code'
         default:
             return firstName+' is doing something else'
     }
 }
 
 

console.log(whatDoYouDo('designer', 'Anand'));
console.log(whatDoYouDo('driver', 'Hem'));
console.log(whatDoYouDo('pro', 'Ananya'));
*/

/*******************************************
*ARRAYS
*/
 // Initializing Array
/*var names = ['Anand', 'Sonam', 'Ananya'];
var years = new Array(1991,1997,2018);
console.log(names[2]);
//Mutating Array
console.log(names.length)
names[names.length] = 'Mary';
console.log(names);

// Different DataTypes
var anand = ['anand', 'jha', 1991, 'Software Coder', false];

anand.push('blue');
anand.unshift('Mr.');
console.log(anand);

anand.pop();
anand.shift();
console.log(anand);
console.log(anand.indexOf(1991));
*/
/*************************************
*CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
*/

/*function tipCalculator(bill) {
    var percentage;
    if(bill < 50 ) {
        percentage = 0.2;
    } else if(bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else if(bill > 200) {
        percentage = 0.1;
    }
    return bill * percentage;
}


var bills = [124, 48, 268];
var tip = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var totalCost = [bills[0]+tip[0], bills[1]+tip[1], bills[2]+tip[2]];

console.log(bills, tip, totalCost);

//Object Literals
var anand = {
    firstName: 'Anand',
    middleName: 'Kumar',
    lastName: 'Jha',
    birthYear: 1991,
    family: ['maa','papa','baba','bhai','Sonam','Ananya'],
    job: 'Software coder',
    calcAge: function() {
        this.age =  2018 - this.birthYear;
    }
};
console.log(anand.firstName);
console.log(anand['lastName']);
console.log(anand.calcAge());
console.log(anand);*/

//New Object
 /*var anand1 = new Object();
anand1.firstName = 'Anand';
anand1.birthYear = 1991;
anand1['lastName'] = 'Jha';
console.log(anand1);*/


/*var Anand = {
    fullName: 'Anand Kumar Jha',
    mass: 74,
    height: 1.6,
    calBmi: function() {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

var Hem = {
    fullName: 'Hemshankar Jha',
    mass: 80,
    height: 1.6,
    calBmi: function() {
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}

    
    if(Anand.calBmi() > Hem.calBmi()) {
    console.log(Anand.fullName+' has higher BMI than Hem');
}else if(Hem.bmi > Anand.bmi) {
    console.log(Hem.fullName+' has higher BMI than Anand');
} else {
    console.log('They have equal BMI');
}*/

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

var John = {
    firstName: 'John',
    bills: [124,48,268,180,42],
    calculatorTip: function() {
        this.tip = [];
        this.finalValue = [];
        for(var i = 0 ; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;
            if(bill < 50) {
                percentage = .2;
            }else if(bill >= 50 && bill <= 200) {
                percentage = .15;
            }else {
                percentage = .1;
            }
            this.tip[i] = bill * percentage;
            this.finalValue[i] = bill + this.tip[i];
        }
    }
}

var Mark = {
    firstName: 'Mark',
    bills: [77,375,110,45],
    calculatorTip: function() {
        this.tip = [];
        this.finalValue = [];
        for(var i = 0 ; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var percentage;
            if(bill < 100) {
                percentage = .2;
            }else if(bill >= 100 && bill <= 300) {
                percentage = .1;
            }else {
                percentage = .25;
            }
            this.tip[i] = bill * percentage;
            this.finalValue[i] = bill + this.tip[i];
        }
    }
}

function calcAveragetips(tips) {
    var sum = 0;
    for(var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return (sum / tips.length);
}

John.calculatorTip();
Mark.calculatorTip();

John.average = calcAveragetips(John.tip);
Mark.average = calcAveragetips(Mark.tip);

console.log(John);
console.log(Mark);

if(John.average > Mark.average) {
    console.log(John.firstName+'\'s family pays higher tips, with an average of $' +John.average);
}else {
    console.log(Mark.firstName+'\'s family pays higher tips, with an average of $' +Mark.average);
}


















































