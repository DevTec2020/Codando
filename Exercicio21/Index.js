const Mage = require("./Mage");
const Thief = require("./Thief")
const Warrior = require("./Warrior")

const Leo = new Mage('Leo', 10, 3, 5, 14);
const Anderson = new Thief('Anderson', 10, 4, 2);
const Susu = new Warrior('Susu',20, 5, 2, 4);


console.table({Leo, Anderson, Susu})

Susu.MudaPosition()
Susu.Atacar(Anderson)

console.table({Leo, Anderson, Susu})