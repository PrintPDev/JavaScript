// If Statements
// wenn grün -> Fahren

// Wenn Orange -> anfahren/bremsen

// Wenn rot -> halten 

//Fehlermelduing zurückgeben bei falscher Farbe 


function main() {

    var input = document.getElementById("age");
    var age = input.value;
    
    // < 6 Jahre oder > 60 -> Sonderpreis 4€
    // Für alle anderen 6.50
    if(age < 0 || age > 110){
        alert("Kein gültiges ALter")
    }
    else if(age <= 6 || age >= 60){
        alert("Preis lauet 4€")
    }
    else {
        alert("Preis lauet 6.5€")
    }
}
    