function isValidateString(str,len){
  if(str.length > len){
    return false;
  }
  return true;
}


function isPalindrom(str){
  const result = str.toLowerCase().trim();
  for(let i = 0; i < result.length / 2; i++){
    if(result[i] !== result[result.length - 1 - i]){
      return false;
    }
  }
  return true;
}


function extractNumber(str){
  const numbers = str.match(/\d+/g);
  if(numbers === null){
    return NaN;
  }
  return Number(numbers.join(''));
}


function padStart(str,minLength,strAdd){
  // let strCut = '';
  if(str.length >= minLength){
    return str;
  }
  const addLength = minLength - str.length;
  if(addLength < strAdd.length){
    strAdd = strAdd.slice(0,addLength);
  }
  console.log('cbhalk111', strAdd);


  return strAdd.repeat(Math.ceil(addLength / strAdd.length)).slice(0,addLength) + str;
}
