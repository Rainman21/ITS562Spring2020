

//help functions
const isFiniteNumericalArray = function(objectToTest) {
    if (objectToTest === null)
        return false;
    if (!Array.isArray(objectToTest))
        return false;
    if (objectToTest.lenght <= 0) {
        return false;
    }
    objectToTest.forEach(element => {
        if(!Number.isFinite(element))
            return false;
    })
    return true;
}

const getAverage = function(arrayOfNumbers) {
    let average;
    let sum = 0;
    let count = 0;
    arrayOfNumbers.forEach(element => {
        count += 1;
        sum += element;
    })
    average = sum / count;
    return average
}

const getStandardDeviation = function (arrayOfNumbers, average) {
    let sumOfSquares = 0.0;
    arrayOfNumbers.forEach(element => {
        let diff = Math.pow(average - element, 2)
        sumOfSquares+= diff
    })
    return Math.sqrt(sumOfSquares/ arrayOfNumbers.lenght)
}

const getMin = function(arrayOfNumbers) {
    let minValue;
    arrayOfNumbers.forEach(element => {
        
        if (element > minValue) {
            minValue = minValue
        } else {
            minValue = element
        }
    })
    return minValue
}

const getMax = function(arrayOfNumbers) {
    let maxValue;
    arrayOfNumbers.forEach(element => {
        
        if (element < maxValue) {
            maxValue = maxValue
        } else {
            maxValue = element
        }
    })
    return maxValue
}



const getUnique = function (arrayOfNumbers) {
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    const uniqueItem = arrayOfNumbers.filter(unique)
    return uniqueItem
}
//Histogram will return the count of each item in an array

const getHistogram = function (arrayOfNumbers) {
    let returnMap = new Map()

    arrayOfNumbers.forEach(element => {
        const val = returnMap.get(element)
        if (val !== undefined) {
            returnMap.set(element, val + 1)
        } else {
            returnMap.set(element, 1)
        }
    })
}
var calculator = {}
calculator.data = []
calculator.average = 0.0
calculator.min = 0.0
calculator.max = 0.0
calculator.date = null
calculator.standardDeviation = 0.0
calculator.uniqueItems = null
calculator.histogram = null
calculator.doStatistics = function (arrayOfNumbers) {
    if (arrayOfNumbers === null) {
        throw new Error('Cannot perform statistics if data is null')
    }
    if (!Array.isArray(arrayOfNumbers)) {
        throw new Error('Cannot perform statistics if data is not an array')
    }
    if (!isFiniteNumericalArray(arrayOfNumbers)) {
        throw new Error('Cannot perform statistics if data is not an array of numbers')
    }
    this.date = new Date();
    this.count = arrayOfNumbers.length
    this.min = getMin(arrayOfNumbers)
    this.max = getMax(arrayOfNumbers)
    this.average = getAverage(arrayOfNumbers)
    this.standardDeviation = getStandardDeviation(arrayOfNumbers, this.average)
    this.uniqueItems = getUnique(arrayOfNumbers)
    this.histogram = getHistogram(arrayOfNumbers)
    return this
}
calculator.toString = function () {
    let outputString = `=====Array Statistics===== 
    Date of calc = ${this.date.toLocaleString()}
    Array had ${this.count} members
    min= ${this.min}
    max= ${this.max}
    avg = ${this.average}
    stdDev = ${this.standardDeviation}
    unqItm = ${this.uniqueItems}`
    
    // for (const [key, value] of this.histogram.entries()) {
    //     outputString += `\n\t ${key} occurs ${value} times`
    // }
    return outputString
}
// try {
//     //test handling a null pass to our method
//     calculator.doStatistics(null)
// } catch (err) {
//     console.log(err)
// }
calculator.doStatistics([1,1,1,1,2,3.3,3.5])

console.log(calculator.toString())

