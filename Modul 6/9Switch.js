// Switch statements

function main(){

var product = "Mehl";

switch(product){

    case "Mehl":
        console.log("Mehl Kostet 1€")
        break;
    case "Milch":
        console.log("Milch 3€")
        break;

    case "Apfel":
    case "Birne":
        console.log("4€")
        break;
    
        default:
            console.log("Gibts nicht")

}

}