// loops

function main(){

        var cars = [ 
        {
                "Brand" : "Mercedes",
                "age" : 10 
        },
        {
            "Brand" : "toyota",
            "age" : 5
        },
        {
            "Brand" : "audi",
            "age" : 3 
        }
        ]

        for(let car of cars){
           if(car.Brand == "Mercedes"){
            console.log(car)
           } else {
            console.log("Auto ist kein Mercedes ")
           }
        
        }
 
    }
    
    
    