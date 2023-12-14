     // Objects 

     var human = {
        name: "Rang",
        height: "160",
        age: 30,
        country: "DE",
        children: ["Maria","Karla"]
     }

     human["age"] = 35
     human.age = 35

     console.log(human.age)

     human.age = "thirty"
     console.log(human.age)