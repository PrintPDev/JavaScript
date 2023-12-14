// If Statements

var color = prompt("Farbe Eingeben")
var colorlow = color.toLowerCase()
// wenn grün -> Fahren

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

// Wenn Orange -> anfahren/bremsen

// Wenn rot -> halten 

//Fehlermelduing zurückgeben bei falscher Farbe 

