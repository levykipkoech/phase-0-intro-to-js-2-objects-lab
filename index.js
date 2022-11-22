// Write your solution in this file!
const employee= {}

employee.name= "Sam";
streetAdress= "Broadway";

function updateEmployeeWithKeyAndValue(object, key, value){
    const newObj={...object};
    newObj[key]= value;
    return newObj;
}
const firstEmployee = updateEmployeeWithKeyAndValue(employee, "streetAdress", "11 Broadway");

console.log(firstEmployee);

const secondEmployee=updateEmployeeWithKeyAndValue(employee['streetAddress']);

console.log(secondEmployee);


function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key]=value;
    return object;
}

const thirdEmployee= destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

console.log(thirdEmployee);

function deleteFromEmployeeByKey(object, key){
    const oldObject={...object};
    delete oldObject[key];
    return oldObject

}

let fourthEmployee= deleteFromEmployeeByKey(employee, 'name');

console.log(fourthEmployee['name']);
console.log(typeof fourthEmployee);

function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object[key];
    return object;
}

let fifthEmployee= destructivelyDeleteFromEmployeeByKey(employee, 'name');

console.log((fifthEmployee['name']));
console.log(employee['name']);
console.log(employee);




