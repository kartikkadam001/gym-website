BMI_2.js
function calculateBMI() {

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

if (height === "" || weight === "") {
    alert("Please enter height and weight.");
    return;
}

height = height / 100;

let bmi = weight / (height * height);

let status = "";

if (bmi < 18.5)
    status = "Underweight";
else if (bmi < 25)
    status = "Normal";
else if (bmi < 30)
    status = "Overweight";
else
    status = "Obese";

document.getElementById("result").innerHTML =
    "BMI = " + bmi.toFixed(2) + "<br>Status: " + status;

}