// Storage Controller

// Item Controller
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const data = {
        items: [{
            id: 0,
            name: 'Steak Dinner',
            Calories: 1200
        }, {
            id: 1,
            name: 'Cookie',
            Calories: 400
        }, {
            id: 2,
            name: 'Eggs',
            Calories: 300
        }],
        currentItem: null,
        totalCalories: 0
    }

    return {
        logData: function(){
            return data;
        }
    }
})();

// UI Controller
const UICtrl = (function () {

})();

// App Controller
const App = (function (ItemCtrl, UICtrl) {
    return {
        init: function(){
            console.log('Initalizing App...')
        }
    }
})(ItemCtrl, UICtrl);

// Initalize App
App.init();