function log(message) {
    console.log(message);
}
var message = 'hello';
log(message);
var message;
message = 'abc';
var endsWC = message.endsWith('c');
var alternate = message.endsWith('c');
var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); };
var color;
(function (color) {
    color[color["red"] = 5] = "red";
    color[color["green"] = 6] = "green";
    color[color["blue"] = 7] = "blue";
})(color || (color = {}));
;
var c = color.blue;
console.log(c);
var randomvalue = 10;
randomvalue = true;
randomvalue = 'kunal';
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
a = true;
var b = 20;
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
anyType = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
var A = add(2);
console.log(A); // answer 12
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var i = {
    firstName: 'kunal',
    lastName: 'verma'
};
fullName(i);
var drawPoint = function (point) { };
drawPoint({
    x: 1,
    y: 2
});
