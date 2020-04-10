

//calculator will determine statiscs for an array of numbers

//helper functions
const isFiniteNumericalArray = function (objectToTest) {
    if (objectToTest === null)
      return false;
    if (!Array.isArray(objectToTest))
      return false;
    if (objectToTest.length <= 0) {
      return false;
    }
    objectToTest.forEach(element => {
      if (!Number.isFinite(element))
        return false;
    })
    return true;
  }
  
  const getMostOccur = function mode(arrayOfNumbers){
    return arrayOfNumbers.sort((a,b) =>
    arrayOfNumbers.filter(v => v===a).length
        - arrayOfNumbers.filter(v => v===b).length
    ).pop();
  }
  
  const getAverage = function (arrayOfNumber) {
    let average;
    let sum = 0;
    let count = 0;
    arrayOfNumber.forEach(element => {
      count += 1
      sum += element;
    })
    average = sum / count;
    return average;
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
  
  const getStandardDeviation = function (arrayOfNumbers, average) {
    let sumOfSquares = 0.0
    arrayOfNumbers.forEach(element => {
      let diff = Math.pow(average - element, 2)
      sumOfSquares += diff
    })
    return Math.sqrt(sumOfSquares / arrayOfNumbers.length)
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
  
    return returnMap;
  }
  
  
  var calculator = {}
  calculator.data = []
  calculator.average = 0.0
  calculator.min = 0.0
  calculator.max = 0.0
  calculator.count = 0
  calculator.date = null
  calculator.standardDeviation = 0.0
  calculator.uniqueItems = null
  calculator.histogram = null
  calculator.mostOccur = 0.0
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
    this.average = getAverage(arrayOfNumbers)
    this.min = getMin(arrayOfNumbers)
    this.max = getMax(arrayOfNumbers)
    this.uniqueItems = getUnique(arrayOfNumbers)
    this.mostOccur = getMostOccur(arrayOfNumbers)
    this.standardDeviation = getStandardDeviation(arrayOfNumbers, this.average)
    this.histogram = getHistogram(arrayOfNumbers)
    return this
    //calculator.doStatistics([2]).
  }
  
  calculator.toString = function () {
    let outputString = `=====Array Statistics========  
    Date of calc = ${this.date.toLocaleString()}
    Array had ${this.count} members
    min= ${this.min}
    max= ${this.max}
    mstOccur = ${this.mostOccur}
    unqItm = ${this.uniqueItems}
    avg = ${this.average} stdDev=${this.standardDeviation}`
  
    for (const [key, value] of this.histogram.entries()) {
      outputString += `\n\t ${key} occurs ${value} times`
    }
    return outputString;
  }
  
  // try {
  //   //test handling a null pass to our method
  //   calculator.doStatistics(null)
  // } catch (err) {
  //   console.log(err)
  // }
  calculator.doStatistics([6, 3, 9, 6, 6, 5, 9, 3])
  
  console.log(calculator.toString())