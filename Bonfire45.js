//how is Arr getting updated? I dont' understand. I only use it once to copy thisVariableIsAnUpdateOfArr

function pairwise(arr, arg) {
    var combinations = [];
    var thisVariableIsAnUpdateOfArr = arr;
    console.log(arr);
    console.log("why don't the two console.log's equal the same thing? I never update arr");
    combinations = findPairsThatAddUpToArgWithDuplicates(thisVariableIsAnUpdateOfArr, arg, combinations);
    console.log(arr);
    //var combinationsTurnedIntoSingleArray = flattenAllNumbersIntoSingleArray(combinations);
    //getIndexesOfNumbers(combinationsTurnedIntoSingleArray, arr);
    //console.log(combinationsTurnedIntoSingleArray.reduce(addThemUp,0));
    //return combinationsTurnedIntoSingleArray.reduce(addThemUp,0);
}
function findPairsThatAddUpToArgWithDuplicates(thisVariableIsAnUpdateOfArr, arg, combinations){
    for(var i in thisVariableIsAnUpdateOfArr){
        for(var j = 0; j < thisVariableIsAnUpdateOfArr.length; j++){
            if(thisVariableIsAnUpdateOfArr[j] !== thisVariableIsAnUpdateOfArr[i] && thisVariableIsAnUpdateOfArr[j] + thisVariableIsAnUpdateOfArr[i] === arg){
                combinations.push([thisVariableIsAnUpdateOfArr[j], thisVariableIsAnUpdateOfArr[i]]);
                thisVariableIsAnUpdateOfArr[j] = "";
                thisVariableIsAnUpdateOfArr[i] = "";

            }
        }
    }

    return combinations;
}

/*function reverseThenTestAndRemoveDupes (combinations){
    var nonDuplicateCombinations = [];
    for(var i in combinations){
        var currentReversedPair = new RegExp([combinations[i][1], combinations[i][0]]);
        if(currentReversedPair.test(combinations) && !currentReversedPair.test(nonDuplicateCombinations)){
            nonDuplicateCombinations.push(combinations[i]);
        }
    }
    return nonDuplicateCombinations;
}

function flattenAllNumbersIntoSingleArray(twoDArray){
    var arrayHoldingTank = [];
    for (var i in twoDArray){
        arrayHoldingTank.push(twoDArray[i][0]);
        arrayHoldingTank.push(twoDArray[i][1]);
    }
    return arrayHoldingTank;
}

function getIndexesOfNumbers(arrayOfNumbers, arr){
    for (var i in arrayOfNumbers){
        arrayOfNumbers[i] = arr.indexOf(arrayOfNumbers[i]);
    }

}

function addThemUp(acc, val) {
    return acc + val;
}

*/


pairwise([1,4,2,3,0,5], 7);

//what if you changed all of the values to equal a letter in the alphabet so that they stayed unique.
//once an element has been used it cannot be used to pair with another

