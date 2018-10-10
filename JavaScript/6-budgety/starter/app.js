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
        }
    
    };
    
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
        inputBtn: '.add__btn'
    };
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMString.inputType).value,
            description: document.querySelector(DOMString.inputDescription).value,
            value: document.querySelector(DOMString.inputValue).value
            };
            
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
      
    var ctrlAddItems = function() {
        
        var input, newItem;
        // 1.get the field input data
        input = UICtrl.getInput();
        
        
        // 2. Add the item to the budget controller
        
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        budgetCtrl.testing();
        
        // 3. Add the item to the UI
        
        // 4. Calculate the Budget
        
        //5.Display the Budget in the UI
         
        
    };
   //Some Code
    return {
        init: function() {
            
            setupEventListner();
        }
    };
    
    
})(budgetcontroller, UIcontroller);

controller.init();