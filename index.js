// Code your solution in this file

// This function takes an array of drivers
// and a string as arguments, and returns the
// matching list of drivers. The function should
// be case insensitive.
function findMatching(driversArr, name){
  return driversArr.filter(function (driverName) {
    return driverName.toUpperCase() == name.toUpperCase();
  });
}


function fuzzyMatch(driversArr, letters){
  return driversArr.filter(function (driverName) {
    return driverName.startsWith(letters);
  });
}

function matchName(driversArr, name){
  return driversArr.filter(function (driver) {
    return driver.name == name;
  });
}
