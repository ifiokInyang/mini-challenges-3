function listSorting(needle, haystack){
    let indexResult = haystack.lastIndexOf(needle)
// console.log("indexResult is " + indexResult)
// console.log(Array.isArray(haystack))
let newItem;
let multidimensional = [];
let modelArray = [newItem, multidimensional]
let hay = haystack.filter(Array.isArray).length
if (hay>0){
    
for(let item of haystack){
let multidimensionalIndex = item.lastIndexOf(needle)
if (multidimensionalIndex != -1){
multidimensional.push(multidimensionalIndex)
}
// console.log("multiindex is is " + multidimensionalIndex)
// console.log(multidimensional)
newItem = item.filter(index => index == haystack[multidimensionalIndex])
// filter items based on haystack[indexResult]
    
}
} if (hay>0){
    return modelArray
} else {
return indexResult
}

}
console.log(listSorting(5, [1,2,3,4,5,6,8,5,3]))
console.log(listSorting(5, [[3],[6],[7], [4,5]]))
module.exports = listSorting;
