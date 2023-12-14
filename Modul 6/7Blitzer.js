// If Statements
// wenn grün -> Fahren

// Wenn Orange -> anfahren/bremsen

// Wenn rot -> halten 

//Fehlermelduing zurückgeben bei falscher Farbe 


function main() {

    var inputSpeed = document.getElementById("speed");
    var inputDir = document.getElementById("dir");
    var inputmaxspeed = document.getElementById("maxspeed")

    var speed = inputSpeed.value;
    var isFacing = inputDir.checked;
    var maxspeed = inputmaxspeed.value;

    var maxspeedwith = maxspeed * 1.10

        console.log(maxspeedwith)
    if(speed > maxspeedwith && isFacing == true){
        alert("Du wurdest geblitzt")
    }
    
 
}
    