var shopper = {  
    name: 'Julee',
    age:  42,
    sex:  'female',
    married: true,
    groceryCart:  ['orange juice', 'apples', 'spinach', 'bread', 'milk', 'eggs'],
    method: function () {
        console.log("I'm going to the store to get: " + this.groceryCart[2] + ".")
    }
}

shopper.method(shopper.agsee)

// method: function () {
    //do the stuff


