function binaryCompiler(str) {
  const arr = str.split(" ");

  let charCodeArr = [];
  for(let i = 0; i < arr.length; i++){
    let bit = 2;
    let power = (arr[i].length-1);
    let sum = 0;
    for(let j = 0;  j < 8 ; j++ ){

      if(Number(arr[i][j]) === 1){
        sum += Math.pow(bit,power)
      }
      power--
    }
    charCodeArr.push(String.fromCharCode(sum))
  }
  return charCodeArr.join("");
}