// loops

function main(){

    var names = ["Peter", "Jannick", "Maria"]
    // For Loop
    
    
    for (let i = 0; i < names.length ; i++){
        console.log(names[i]);
    
    }


    var revenue = [500,300,200,100,500,200,100];

    var totalRev = 0;
    
    for (let i = 0; i < revenue.length ; i++){
        totalRev += revenue[i];
        console.log(names[i]);
    }
    
        console.log("Total :" + totalRev)
    }
    
    
    