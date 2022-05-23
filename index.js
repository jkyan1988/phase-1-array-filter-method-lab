// Code your solution here
function findMatching(drivers, string){
    let pie = drivers.filter(element => element === string || element === string.toLowerCase())
    return pie
}

// function findMatching(drivers, str) {
//     function(turtle) = str => {}
//   return drivers.filter(str)
//   }
  


function fuzzyMatch(drivers, string) {
    return drivers.filter(element => element.startsWith(string))   
}
// function fuzzyMatch(drivers, names){
//     const fuzzyMatchedNames = drivers.filter(function(firstLetter){
//         return firstLetter.startsWith(names);
//     })
//     return fuzzyMatchedNames
//  }


function matchName(drivers, string) {
    return drivers.filter(element => element.name === string)
}

// function matchName(drivers, theWeeknd){
//     const whatAreWeLookingFor = drivers.filter(function(nameProperties){
//         return nameProperties.name === theWeeknd
//     })
//     return whatAreWeLookingFor
//  }

// function matchName(drivers, str) {
//     const pikachu = drivers.filter(function(value) {
//         return str.value
//     })
//     return pikachu;
// }
