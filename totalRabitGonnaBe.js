function totalRabitGonnaBe(arr){
  let specieObj = {};
  let total = 0;
  let narator = 1;
  
  //make specieObj
  for(let i = 0; i < arr.length; i++){
      let count = 1 ;
      if(specieObj.hasOwnProperty(arr[i])){
        specieObj[arr[i]] = specieObj[arr[i]]+1
      }else{
        specieObj[arr[i]] = count;
      }
  }

  // make specie if count is more than one and get total
  for(let key in specieObj){
      key = Number(key);
      if(specieObj[key] > 1){
         let specie = Math.ceil(specieObj[key] / (key + narator));
         total += specie * (key + narator);
      }else{
         total += key + narator;
      }
  }
 return total;
}

console.log(totalRabitGonnaBe([2,2,2,2,3]));
console.log(totalRabitGonnaBe([0,0,1,1,5]));
console.log(totalRabitGonnaBe([3,2,1,4,5]));
console.log(totalRabitGonnaBe([1,1,1,1,1,1]));