function firstLetter(inputString) 
{
    if (inputString === undefined || inputString.length === 0)
    {
        return undefined;
    }
    return inputString.charAt(0);
}

function lastLetter(inputString)
{
    if (inputString === undefined || inputString.length === 0)
    {
        return undefined;
    }
    return inputString.charAt(inputString.length-1);
}

function letterAtPosition(inputString, position)
{
    if (inputString === undefined || inputString.length === 0 || position < 0 || position > inputString.length)
    {
        return undefined;
    }
    return inputString.charAt(position);
}

function addTwoNumbers(num1, num2) {
    if (typeof num1 !== 'number'|| typeof num2 !== 'number' || num1.length ===0 || num2.length === 0)
    {
        return;
    }
    return (num1 + num2);

}

function multiplyTwoNumbers(num1, num2) {
    if (typeof num1 !== 'number'|| typeof num2 !== 'number' || num1.length ===0 || num2.length === 0)
    {
        return;
    }
    return (num1 * num2);
}

function calculator(operation, num1, num2) {
    if (typeof num1 !== 'number'|| typeof num2 !== 'number' || num1.length === 0 || num2.length === 0)
    {
        return;
    }
    switch (operation) {
        case 'add':
            return num1+num2;    
           
        case 'sub':
            return num1-num2;    
           
        case 'mult':
            return num1*num2;    
            
        case 'div':
            return num1/num2;    
            
        default:
            return;
    }
}

function repeatString(inputString, numRepetitions) {
    if (typeof inputString !== 'string' || typeof numRepetitions !== 'number')
    {
        return undefined;
    }
    else if (numRepetitions <= 0)
    {
        return '';
    }
    else
    {
        var result = '';
        for (var i = 0; i<numRepetitions; i++)
        {
            result = result.concat(inputString);
        }
        return result;
    }
}

function reverseString(inputString) {
    if (typeof inputString !== 'string')
    {
        return undefined;
    }
    return inputString.split('').reverse().join('');
}

function longestWord(inputString) {
    if (typeof inputString !== 'string')
    {
        return undefined;
    }
    if (inputString.length === 0)
    {
        return inputString;
    }
    var stringArray = inputString.split(' '); //split at space
    var word = stringArray[0]
    for(var i = 1; i < stringArray.length; i++)
    {
        if (word.length < stringArray[i].length)
        {
            word = stringArray[i]
        }
    }
    return word;
}

function capitalize(inputString) {
    if (typeof inputString !== 'string')
    {
        return undefined;
    }
    if (inputString.length === 0)
    {
        return inputString;
    }
    inputString = inputString.toLowerCase(); //make it all lower case
    var wordArray = inputString.split(' '); //split at space 
    var outputString = '';
    
    for (var i = 0; i < wordArray.length; i++)
    {
        var currentWordLetters = wordArray[i].split(''); //split the word to letters
        currentWordLetters[0] = currentWordLetters[0].toUpperCase(); // capitalize first letter
        wordArray[i] = currentWordLetters.join('');
    }
    return wordArray.join(' '); //join the words from the array with space
}

function sumOfNumbers(arrayOfNumbers)
{
    if(!Array.isArray(arrayOfNumbers))
    {
        return;
    }
    var sum = 0;
    for(var i =0; i < arrayOfNumbers.length; i++)
    {
        if(typeof arrayOfNumbers[i] !== 'number')
        {
            return;
        }
        sum = sum + arrayOfNumbers[i];
    }
    return sum;
}

function uniqueElements(array1, array2) 
{
    if(!Array.isArray(array1) || !Array.isArray(array2))
    {
        return;
    }
    var uniqueArray = [];
    for (var i =0; i < array1.length; i++)
    {
        if(array2.indexOf(array1[i])< 0)
        {
            uniqueArray.push(array1[i]);
        }    
    }
    
    for (var i =0; i < array2.length; i++)
    {
        if(array1.indexOf(array2[i])< 0)
        {
            uniqueArray.push(array2[i]);
        }    
    }
    return uniqueArray;
}

function isPalindrome(inputString) {
    inputString = inputString.toLowerCase();
    var editString = inputString.replace(/\W/gi, ''); //\W switch to replace all non letter or number characters
    var reverseString = editString.split('').reverse().join('');
    console.log(editString);
    console.log(reverseString);
    if (reverseString === editString)
    {
        return true;
    }
    else 
    {
        return false;
    }

}

function wrapCharacter(inputString) {
    var count = 1;
    var outputString = '';
    var i = 0;
    
    //for(var i=0; i < inputString.length; i++)
    
    while(i < inputString.length)
    {
        if(count === 1)
        {
            if(inputString[i] === ' ')
            {
                i += 1; //go to next chr
            }
            else
            {
                outputString += inputString[i];
                count += count;
                i += 1;
            }
        }
        else if(count === 41)
        {
            outputString = outputString + "\n";
            count = 1; //set count to 1
        }
        else //count not 1 or 41
        {
            outputString += inputString[i];
            count += 1;
            i += 1;
        }
    }
    console.log(outputString);
    return outputString;
}

function wrapWord(inputString) {
    var count = 1;
    var outputString = '';
    var tempString = '';
    var smallWord1, smallWord2, bigWord = 0;
    var wordArray = inputString.split(' ');
    //var largeWordIndex = [];
    
    //for (var word in wordArray)
    for (var i = 0; i < wordArray.length-1; i++)
    {
        if (wordArray[i].length > 40)
        {
            wordArray[i] = "\n" + wordArray[i] + "\n";
            bigWord = i;
            for (var j = smallWord1; j < bigWord; j++)
            {
                tempString += ' ' + wordArray[j];
                //outputString += tempString;
            }
            smallWord2 = bigWord + 1;
            tempString = wrapCharacter(tempString) + wordArray[bigWord];
            outputString += tempString;
        }
        else
        {
            tempString += wordArray[i];
            tempString = wrapCharacter(tempString);
            
        }
    }
    console.log(outputString);
    return outputString;
}

function bubbleSort(arrayOfNumbers) {
    var listSize = arrayOfNumbers.length;
    
    if (listSize === 0)
    {
        return arrayOfNumbers;
    }
    
    var temp;
    for (var i = 0; i <= listSize -1; i++)
    {
        var swapped = false;
        for( var j = 0; j<= listSize -1; j++)
        {
            if(arrayOfNumbers[j] > arrayOfNumbers[j+1])
            {
                temp = arrayOfNumbers[j];
                arrayOfNumbers[j] = arrayOfNumbers[j+1];
                arrayOfNumbers[j+1]= temp
                swapped = true;
            }
        }
        if (swapped === false) //to not go into redundant iterations
        {
            break;
        }
        
    }
    return arrayOfNumbers;
    
}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};