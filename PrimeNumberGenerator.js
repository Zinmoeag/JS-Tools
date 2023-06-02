class Prime{

  #primeArr = [];

  constructor(maxnum){
    var primes = [];
    for (var i = 0; i <= maxnum ; i++) {
      primes[i] = true; 
    }
    primes[0] = false;
    primes[1] = false;

    for (var i = 2; i <= Math.sqrt(maxnum); i++) {
      for (var j = 2; j * i <= maxnum; j++) {
          primes[i * j] = false;
      } 
    }

    for (var i = 0; i < primes.length; i++) {
      if (primes[i]) this.#primeArr.push(i); 
    } 
  }

  static generate(maxNum)
  {
      return new Prime(maxNum);
  }

  getByArray()
  {
    return this.#primeArr;
  }

  sumThemAll(){
    return this.#primeArr.reduce((a,n) => a+n);
  }

}