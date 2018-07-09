/*String interpolation
function disName (fName, lName) {
    console.log(`${fName} ${lName}`);
}
disName("Roy", "Fokker");

datName = function(fName, lName) {
    console.log(`${fName} ${lName}`);
}
datName("Rick", "Hunter");

helloWorld = () => {console.log("Hallo Welt!");}
helloWorld();

doseNames = (fName, lName) => {console.log(`${fName.toUpperCase()} ${lName.toUpperCase()}`);}
doseNames("lin", "minmei");


//arrow functions
function Invoice(_subTotal) {
    this.taxRate = 0.06;
    this.subTotal = _subTotal;
    this.total = setInterval(() => {
        console.log((this.taxRate * this.subTotal) + this.subTotal);
    }, 2000);
}

const inv = new Invoice(100);
inv.total;

//hot swapping with variable deconstruction--remember the brackets
let playerOne = "Rick";
let playerTwo = "Lin";

function Players() {
    console.log (`
    Player One: ${playerOne}
    Player Two: ${playerTwo}
    `);
}

Players();

[playerOne, playerTwo] = [playerTwo, playerOne];
Players(); 

//practice using deconstruction with functions
const user = {
    name: "Lin",
    email: "lminmei@macrosscity.com"
}

const renderUser = ({name, email}) => {
    console.log(`${name}: ${email}`);
}

renderUser(user);  

//practice with the spread operator
const shoppingCart = [1, 1, 2, 3, 5, 8];
const newItems = [...shoppingCart];


newItems.push(13);
console.log(newItems);
console.log(shoppingCart);
console.log(Math.max(...newItems));

const {command, fighter, ...defenders} = {
    command: "SDF-1",
    fighter: "VF-1J",
    defender_1: "Excalibur",
    defender_2: "Radar X",
    defender_3: "Gladiator"
}

console.log(fighter);
console.log(command);
console.log(defenders);  

//default values for objects when passed to functions
const blog = { 
    title: "My Great Post",
    //summary: "This is what the post is about."
}

const openGraphMetadata = ({title, summary= "A daily smart post."}) =>{
    console.log( `
        ogTitle = ${title}
        ogSummary = ${summary}
    `);
}

openGraphMetadata(blog);   

//working with classes--finally some object oriented stuff
class Instructor {
    constructor({_name, _role = "Skull Leader"}){
        this.name = _name;
        this.role = _role;
    }

    renderDetails() {
        console.log(`${this.name}: ${this.role}`);
    }

    static helloWorld() {
        console.log("Hello Macross City!");
    }

    static canTeach(_instructor) {
        return (_instructor.role === "Skull Leader");
    }
}

const pilot = new Instructor({_name: "Roy Fokker"});
const wing = new Instructor({_name: "Rick Hunter", _role: "Red Leader"});
pilot.renderDetails();
wing.renderDetails();
Instructor.helloWorld();

console.log(`${pilot.name} can teach: ${Instructor.canTeach(pilot)}`);
console.log(`${wing.name} can teach: ${Instructor.canTeach(wing)}`);   */


//promises promises
let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve("Hello...")
    }, 2000);

    setTimeout (() => {
        reject("Too sleepy...")
    }, 2000);
});

sleepyGreeting
    .then( data => {
        console.log(data);
    })
    .catch( err => {
        console.error(err)
    });

