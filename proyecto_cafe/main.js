"use strict"

//displays individual coffee in coffee array

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<p id="coffee-id">' + coffee.id + '</p>';
    html += '<h4 id="coffee-name">' + coffee.name + '</h4>';
    html += '<p id="coffee-roast">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

//displays all coffees through array

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// filters coffees based on selections for roasts


function updateCoffees(e) {

    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;

    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        } else if (selectedRoast === 'All') {
            filteredCoffees.push(coffee);
        //    Bonus All*
        }
    });

    div.innerHTML = renderCoffees(filteredCoffees);
}

// allows search for coffee by name
function searchCoffee(userInput) {
    var tempArray =[];
    var temp = userInput;
    userInput = userInput.charAt(0).toUpperCase();
    //case sensitive search Bonus*
    temp = temp.substr(1);
    userInput = userInput + temp;
    coffees.forEach(function (e) {
        if(e.name.includes(userInput)){
            tempArray.push(e);
        }
    });
    return tempArray;
}

//renders page to update by search
function changeBySearchName(e) {
    var tempN = searchCoffee(e);
    div.innerHTML = renderCoffees(tempN)
}





// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},

];
coffees.reverse();

let div = document.querySelector('#coffees');
let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');
let roastSearchN = document.getElementById('roast-search');

//renders coffees on html
div.innerHTML = renderCoffees(coffees);



submitButton.addEventListener('click', updateCoffees);

roastSearchN.addEventListener("keyup", function () {
    let temp = roastSearchN.value;
    changeBySearchName(temp);
});

// (Note that any new coffees you add will be lost when you refresh the page, for an extra challenge, research localStorage and see if you can find a way to persist the data)

