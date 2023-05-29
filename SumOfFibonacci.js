
class Fibonacci{
  
  #fibonacciArr = [0,1];
  #sumOfFibonacci = 1;

  constructor(MaximumVal)
  {
      let newValue = (this.#fibonacciArr[this.#fibonacciArr.length-1]+this.#fibonacciArr[this.#fibonacciArr.length-2]);

      for(newValue; newValue <= MaximumVal ; newValue = this.#fibonacciArr[this.#fibonacciArr.length-1]+this.#fibonacciArr[this.#fibonacciArr.length-2] ){
        this.#fibonacciArr.push(newValue)
      }
      return this;
  }

  static generate(maximumNum)
  {
      return new Fibonacci(maximumNum);
  }

  // ----- filter

  filter(even = true)
  {
      let filteredArr;
      if(!even){
        filteredArr =  this.#fibonacciArr.filter(item => item % 2 !== 0 );
      }else{
        filteredArr =  this.#fibonacciArr.filter(item => item % 2 === 0 );
      }
      this.#fibonacciArr = filteredArr;
      return this
  }

  // ----getMethod

  sumThemAll()
  {
      this.#sumOfFibonacci = this.#fibonacciArr.reduce((a,n) => a+n)
      return this.#sumOfFibonacci;
  }

  getByArray()
  {
    return this.#fibonacciArr;
  }

}
