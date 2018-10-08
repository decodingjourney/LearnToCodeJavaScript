//BUDGET CONTROLLER
var budgetcontroller = (function() {
    //Some coe
    
    
    
})();

// UI CONTROLLER
var UIcontroller = (function() {
    
    //Some code later
    
})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
   //Some Code
    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('button was clicked. ');
        
    });
    
})(budgetcontroller, UIcontroller);