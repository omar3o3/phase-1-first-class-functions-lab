// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (y){
  return y.slice(0,2);
}

const returnLastTwoDrivers = function (x){
  return x.slice(-2);
}

// let selectingDrivers = [
//   returnFirstTwoDrivers(x)
// ]

let selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

const createFareMultiplier = function fareMultiplier (multiplier){
  return function(fare){
    return multiplier * fare;
  }
}

// function fareDoubler(x){
//   return x * 2;
// }

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (arrayOfDrivers, whichDrivers){
//   if (whichDrivers === returnFirstTwoDrivers){
//     return returnFirstTwoDrivers;
//   } else if (whichDrivers === returnLastTwoDrivers){
//     return returnLastTwoDrivers;
//   }
// }

// const selectDifferentDrivers = function(arrayOfDrivers, whichDrivers){
//   return whichDrivers(arrayOfDrivers);
// }

const selectDifferentDrivers = function(arrayOfDrivers, whichDrivers){
  if (whichDrivers === returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
  } else if (whichDrivers === returnLastTwoDrivers){
    return returnLastTwoDrivers(arrayOfDrivers);
  }
}
