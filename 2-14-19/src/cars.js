const allCars = [
  {
    model: "Mustang",
    color: "Midnight Blue",
    year: 1976,
    length: 120,
    width: 62,
    height: 47
  },
  {
    model: "Xterra",
    color: "Forest Green",
    year: 2011,
    length: 144,
    width: 71,
    height: 55
  },
  {
    model: "Thunderbird",
    color: "Red",
    year: 2005,
    length: 115,
    width: 58,
    height: 42
  },
  {
    model: "Suburban",
    color: "Grey",
    year: 2015,
    length: 149,
    width: 73,
    height: 58
  }
];

const carType = "model";
const firstModel = allCars[0][carType];
console.log(firstModel);

allCars.forEach(singleCar => {
  console.log(singleCar[carType]);
});

const valueArray = Object.values(allCars[0]);
console.log(valueArray);

allCars.forEach(singleCar => {
  Object.values(singleCar).forEach(singleValue => {
    document.querySelector("#cars").innerHTML += `<p>${singleValue}</p>`;
  });
});

// ---- SET ONE --//
// Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate.
const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const doctorsBill = [{
    officeName: "Rodger the Doctor",
    streetAddress: "123 Ogr Street",
    doctorName: "Greg the Orc",
    patientName:"Blacktoe",
    visitDate:"3/12/99",
    amountBilled:"999.99",
    dueDate:"3/12/19"
}];

// Copy the code below and paste it above your object.

// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"
// Use square bracket notation to output the value of those three properties to the console in Chrome.

// Use Object.values() to output all the property values to the console in Chrome.


console.log(doctorsBill[dateVisited],doctorsBill[owed],doctorsBill[patient]);

bill = Object.values(doctorsBill);

console.log(bill);


// ---- SET TWO ----//
// Use Object.keys() to output all of the key names from your doctor's office bill to the console in Chrome.

const billKeys = Object.keys(doctorsBill[0])
console.log(billKeys);

// Next, output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.
billKeys.forEach(singleKey => {document.querySelector("#doctor").innerHtml = `<span>${singleKey}</span>`})


// -- SET THREE -- //

// Create an object to represent your favorite dinner item(e.g.meatloaf, spaghetti, fried fish, gumbo).Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const favoriteDinner = [{
    name: "fried shrimp",
    side: "fries",
    size: "large",
    calories: "loooots"
}]

// Output all of the key / value pairs into the DOM inside an < article > element with a class of food.

const favoriteFoods = Object.entries(favoriteFoods);
console.log(favoriteFoods);

favoriteFoods.forEach(smallerArray => {
    document.querySelector(".food").innerHTML += `<p>My favorite food's ${smallerArray[0]} is ${smallerArray[1]}</p>`
})










