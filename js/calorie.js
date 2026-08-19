calorie.js
function calculateCalories() {

let age = parseInt(document.getElementById("age").value);
let gender = document.getElementById("gender").value;
let height = parseFloat(document.getElementById("height").value);
let weight = parseFloat(document.getElementById("weight").value);
let activity = parseFloat(document.getElementById("activity").value);

// Validation

if (
isNaN(age) ||
isNaN(height) ||
isNaN(weight)
)
{
alert("Please enter all values.");
return;
}

let bmr;

// Male Formula

if(gender=="male")
{

bmr = (10*weight)+(6.25*height)-(5*age)+5;

}
else
{

bmr = (10*weight)+(6.25*height)-(5*age)-161;

}

let maintain = bmr * activity;

let lose = maintain - 500;

let gain = maintain + 500;

document.getElementById("bmr").innerHTML =
"<b>BMR :</b> " + Math.round(bmr) + " kcal/day";

document.getElementById("maintain").innerHTML =
"<b>Maintain Weight :</b> " + Math.round(maintain) + " kcal/day";

document.getElementById("lose").innerHTML =
"<b>Weight Loss :</b> " + Math.round(lose) + " kcal/day";

document.getElementById("gain").innerHTML =
"<b>Weight Gain :</b> " + Math.round(gain) + " kcal/day";

}