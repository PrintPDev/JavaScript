//splice etwas in die liste reinschreiben 

var numbers = [1,3,4,5,6]

numbers.splice(1,0,2)

console.log(numbers)

var names = ["a","b","c","e",]
names.splice(3,0,"d")
console.log(names)


var numberss = [1,3,3]
var numberss2 = [4,5,6]

//arrays zusammenfassen concat
var newarray = numberss.concat(numberss2);
console.log(newarray)
