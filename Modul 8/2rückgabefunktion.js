

var numbers = [
    7,
    46,
    24,
    14,
    65,
    111,
    1,
    4,
    75,
    231,
]

function main(){
    var result  = filter(50)
    console.log(result)
    }
    
function filter(highestNumberallowed){

    var filter = [];

    for (let i = 0; i < numbers.length; i++) {
        
        if(numbers[i] <= highestNumberallowed)
        filter.push(numbers[i])
        
    }

    return filter;

}