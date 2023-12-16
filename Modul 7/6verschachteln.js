// loops

function main(){

    // nasted loops

    var days = 7;
    var weeks = 5;

    for(let i = 1; i <= weeks; i++){
        console.log("Woche:" + i);


        for(let j = 1; j <= days; j++){
            console.log("Tag:" + j)
        }
    }
}
