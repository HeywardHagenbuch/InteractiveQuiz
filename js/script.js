
var container = document.querySelector(".container1");
var drinkH1 = document.querySelector("#drink");

var drinks = ['Tequila',
    'Lacrois',
    'Mojito',
    'Mate',
    'Cuba libre',
    'Old fash']

container.addEventListener("click", function(event) {
    var element = event.target;
    element.dataset;
    var index = Number(element.dataset.number);
    var cost = Number(element.dataset.cost);

    var drink = drinks[index];

    drinkH1.textContent = 'You ordered a ' + drink + '. You owe $' + cost + ' dollars'
});
