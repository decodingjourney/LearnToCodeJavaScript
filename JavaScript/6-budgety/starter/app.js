//BUDGET CONTROLLER
var budgetcontroller = (function() {
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
     
    var data = {
        allItems: {
    exp: [],
    inc: []
    
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    
    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });
        data.totals[type] = sum;
    }
    
    return {
        addItem: function(type, des, val) {
            var newItem, Id;
            
            // CREATE NEW ID
            if(data.allItems[type].length > 0 ) {
                Id = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else {
                Id = 0;
            }
            
            if(type === 'inc') {
                newItem = new Income(Id, des, val);
            }else if(type === 'exp') {
                newItem = new Expense(Id, des, val);
            }
            
            //PUSH IT TO OUR DATASTRUCTURE
            data.allItems[type].push(newItem);
            
            //RETURN NEW ELEMENT
            return newItem;
        },
        
        calculateBudget: function() {
            // 1. sum up the total income
            calculateTotal('inc');
            // 2. sum up the total expenses
            calculateTotal('exp');
            // 3. find the budget(income - expense)
            data.budget = data.totals.inc - data.totals.exp;
            
            // 4. calculate the percentages
            if(data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            }else {
                data.percentage = -1;
            }
            
        },
        
        getBudget: function() {
            return {
               totalBudget: data.budget,
               totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        testing: function() {
            console.log(data);
        }
    };
})();

// UI CONTROLLER
var UIcontroller = (function() {
    
    //Some code later
    
    var DOMString = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMString.inputType).value,
            description: document.querySelector(DOMString.inputDescription).value,
            value: parseFloat(document.querySelector(DOMString.inputValue).value)
            };
            
        },
        
        addListItem: function(obj, type) {
            var html,newHtml, element;
            
            //create HTML String with placeholder text
            if(type === 'inc') {
                element = DOMString.incomeContainer;
            html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }else if(type === 'exp') {
                element = DOMString.expensesContainer;
            html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            
            // Replace that placeholder text with some actual Data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the new HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)
        },
        
        clearFields: function() {
            var fields, fieldArr;
            fields = document.querySelectorAll(DOMString.inputDescription + ', ' +
                                     DOMString.inputValue);
            
            fieldArr = Array.prototype.slice.call(fields);
            
            fieldArr.forEach(function(current, index, array) {
                current.value = "";
                
            });
            
            fieldArr[0].focus();
        },
        getDOMString: function() {
            return DOMString;
        }
    };
    
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListner = function() {
        
        var DOM = UICtrl.getDOMString();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItems);
    
    document.addEventListener('keypress', function(event) {
        
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItems();

        }
       
    });
        
    };
      
    var updateBudget = function() {
        // 1. Calculate the Budget
        budgetCtrl.calculateBudget();
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        // 3. Display the Budget in the UI
        
        console.log(budget);
    }
    var ctrlAddItems = function() {
        
        var input, newItem;
        // 1.get the field input data
        input = UICtrl.getInput();
        
        if(input.description != "" && !isNaN(input.value) && input.value > 0) {
          // 2. Add the item to the budget controller
        
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        
        // 3. Add the item to the UI
        
        UICtrl.addListItem(newItem, input.type);
        
        // 4. Clear the fields
        
        UICtrl.clearFields(); 
        
        // 5. Calculate and display the Budget
        updateBudget();       
        }
    };
   //Some Code
    return {
        init: function() {
            
            setupEventListner();
        }
    };
    
    
})(budgetcontroller, UIcontroller);

controller.init();