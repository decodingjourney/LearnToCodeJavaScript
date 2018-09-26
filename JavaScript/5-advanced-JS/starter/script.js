/*var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;*/
    //Without Inheritance calculateAge function will be attached to all the object instances ending up having duplicate copies 
    // of same function
    /*this.calculateAge = function() {
        console.log(2018 - yearOfBirth);
    }*/
//}
    
    // To avoid duplication of the code we use Inheritance and here in javascript we can do by adding values to the object's Prototype
//properties. as mentioned below
   /* Person.prototype.calculateAge = function() {
        console.log(2018 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1967, 'Software Engineer');
var mark = new Person('Mark', 1948, 'Retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();*/


/*Object.create example
var personProto = {
    calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
}
}
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'jane' },
    yearOfBirth: { value: 1991 },
    job: { value: 'designer' }
});*/

//Primitives vs Objects

//Primitives
/*var a = 10;
var b = a;
a = 20;
console.log(a);
console.log(b);


//Objects

var info = {
    name: 'anand',
    age: 30
};

var infoCopy = info;
info.age = 27;
console.log(info.age);
console.log(infoCopy.age);


//Function

var age = 30;
var obj = {
    name: 'anna',
    city: 'Bangalore'
};

function change(a, b) {
    a = 28;
    b.city = 'Madhubani';
}

change(age, obj);
console.log(age);
console.log(obj.city);*/

// PASSING FUNCTION AS AN ARGUMENT
/* var years = [1991,1990,1986,1965];

function arrCalc(arr, fn) {
    var arrAges = [];
    
    for(var i =0; i < arr.length; i++) {
        arrAges.push(fn(arr[i]));
    }
    return arrAges;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 28;
}

function maxHeartRate(el) {
    if(el >= 28 && el <= 80) {
        return Math.floor(206.9 - (0.67 * el));
    }else 
        return -1;
}
var ages = arrCalc(years, calculateAge);
var fullage = arrCalc(ages, isFullAge);
var heartRate = arrCalc(ages, maxHeartRate);
console.log(ages);
console.log(heartRate);*/


// FUNCTION RETURNING FUNCTION

/*function interviewQuestion(job) {
    if(job === 'Software Engineer') {
        return function(name) {
            console.log('What do you understand by OOPS Concept '+name+' ?');
        }
    }else if(job === 'teacher') {
            return function(name) {
                console.log('what subject do you teach '+name+' ?');
            }
    }else {
                return function(name) {
                    console.log(name+' what do you do ?');
                }
            }
        }

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('munna');

interviewQuestion('Software Engineer')('anand');*/

// IIFE -- Immediately Invoked function declaration
/*(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);*/


//////////////////////////////
//CLOSURES

/*function retirement(retirementAge) {
    var a = 'Years left for retirement';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age)+a);
    }
}

var retirementUS = retirement(65);
retirementUS(1990);*/


//CHALLENGE
/*function interviewQuestion(job) {
    if(job === 'Software Engineer') {
        return function(name) {
            console.log('What do you understand by OOPS Concept '+name+' ?');
        }
    }else if(job === 'teacher') {
            return function(name) {
                console.log('what subject do you teach '+name+' ?');
            }
    }else {
                return function(name) {
                    console.log(name+' what do you do ?');
                }
            }
        }*/

/*function interviewQuestion(job) {
    var softwareMessage = 'what do you understand by OOPS concept ?';
    var teacherMessage = 'what subject do you teach ?';
    var defaultMessage = 'what do you do ?';
    
    return function(name) {
        if(job === 'Software Engineer') {
            console.log(softwareMessage+name);
        } else if(job === 'teacher') {
            console.log(teacherMessage+name);
        }else
            console.log(defaultMessage+name);
    }
}

var software = interviewQuestion();
software('anand');*/

//////////////////////////
// Bind, Call and Apply
var anand = {
    name : 'anand',
    age: 27,
    job: 'Software Developer',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good '+timeOfDay+' Ladies and Gentleman. I\'m '+this.name+' and I\'m a '+this.job+'. I\'m '+this.age+' years old');
        }else if(style === 'friendly'){
            console.log('Hey Guys, What\'s up? I\'m '+this.name+' and I\'m a '+this.job+'. I\'m '+this.age+' years old. Have a nice '+timeOfDay);
        }
    }
};

var mohit = {
    name: 'Mohit',
    age: '48',
    job: 'teacher'
    
};
//anand.presentation('friendly','morning');
//anand.presentation.call(mohit, 'friendly', 'evening');


//Example of Bind
var anandFriendly = anand.presentation.bind(anand,'friendly');
anandFriendly('night');




























