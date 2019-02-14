function StackDataStructure () {
  this.arrayData = [],
  this.MAX_SIZE = 8,
  this.extractedData = 0,
  this.pushData = function (data) {

      this.arrayData.push(data)
  
  },

  this.checkFull = function () {
    return (this.arrayData.length === this.MAX_SIZE)
  },

  this.checkEmpty = function() {
    return (this.arrayData.length === 0)
  },

  this.takeData = function () {

      this.extractedData = this.arrayData[this.lengthProp]
      this.arrayData.splice(this.lengthProp, 1) 

  },

  this.totalLength = function () {
    return this.arrayData.length
    },

  this.lengthProp = this.totalLength()

}

