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
        
        // 1.get the field input data
        var input = UICtrl.getInput();
        
        
        // 2. Add the item to the budget controller
        
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