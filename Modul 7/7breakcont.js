
function main(){

    var numbers = [ 100,350,250,375,1000,750,650,3000,1050,500]


    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]< 1000){
            continue; 
        }
        

        console.log(numbers[i])
        
    }
}