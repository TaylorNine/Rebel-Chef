// Creating an example of JSON
var libations = {
  'drinks': [],
  'state': true
};
libations.drinks.push({ 'name': 'Manhattan', 'price': 9});
libations.drinks.push({ 'name': 'Vodka Tonic', 'price': 10});
libations.drinks.push({ 'name': 'Gin Gimlet', 'price': 8});
libations.drinks.push({ 'name': 'White Russian', 'price': 12});
libations.drinks.push({ 'name': 'Melon Ball', 'price': 11});

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of libations
localStorage.setItem('libations', JSON.stringify(libations));

// Example of how to transform the String generated through 
// JSON.stringify() and saved in localStorage in JSON object again
var restoredLibations = JSON.parse(localStorage.getItem('libations'));

// Now restoredLibations variable contains the object that was saved
// in localStorage
console.log(restoredLibations);
