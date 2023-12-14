// If Statements
// wenn grün -> Fahren

// Wenn Orange -> anfahren/bremsen

// Wenn rot -> halten 

//Fehlermelduing zurückgeben bei falscher Farbe 


function main() {

var input = document.getElementById("inputcolor");
var color = input.value;
var colorlow = color.toLowerCase()

if(colorlow == "grün"){
    alert("Du darfst Fahren");
} 
else if (colorlow == "orange"){
    alert("Lansamer werden");
}
else if (colorlow == "rot"){
    alert("Du musst stehen bleiben ");
}
else {
    alert("Keine gültige farbe")
}
}
