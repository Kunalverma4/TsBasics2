function log(message){
    console.log(message);
}
var message = 'hello'
log(message);


let message;
message = 'abc'
let endsWC = (<string>message).endsWith('c');
let alternate = (message as string).endsWith('c');

let log = function(message){
    console.log(message);
    
}
let doLog = (message)=> console.log(message);
enum color {red=5,green,blue};
let c:color = color.blue
console.log(c);

let randomvalue :any = 10;
randomvalue = true;
randomvalue= 'kunal'

let myVariable:unknown = 10;
function hasName(obj:any): obj is{name:string}{
    return !!obj &&
    typeof obj === "object" &&
    'name' in obj
}
if (hasName(myVariable)){
console.log(myVariable.name);

}

let a;
a=10;
a=true;

let b = 20;

let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType:any;
anyType = 20;
anyType = true;

function add(num1:number,num2:number =10):number {
    if(num2){
        return num1+num2;
    }
    else{
        return num1;
    }
}

let A=add(2)
console.log(A); // answer 12

interface Person {
    firstName : string;
    lastName : string;
}
function fullName(person: Person){
    console.log(`${person.firstName} ${person.lastName}`);   
}
let i = {
    firstName :'kunal',
    lastName :'verma'
}
fullName(i);


interface Point{
    x: number,
    y:number
}
let drawPoint =(point : Point)=>{}
drawPoint ({
    x:1,
    y:2
})