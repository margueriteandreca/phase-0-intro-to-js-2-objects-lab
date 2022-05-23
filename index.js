// Write your solution in this file!
const employee = {
    name: "Cleo",
    streetAddress: "483 Rainbow Way"
};

function updateEmployeeWithKeyAndValue(obj, key, val) {
    const newEmployee = {...employee};
    newEmployee[key] = val;
    return newEmployee;

};

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
};

function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...employee}
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
};