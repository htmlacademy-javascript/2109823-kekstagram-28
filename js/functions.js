export function isValidateString(str,len){
  if(str.length > len){
    return false;
  }
  return true;
}

export function isPalindrom(str){
  const result = str.toLowerCase().trim();
  for(let i = 0; i < result.length / 2; i++){
    if(result[i] !== result[result.length - 1 - i]){
      return false;
    }
  }
  return true;
}

export function extractNumber(str){
  const numbers = str.match(/\d+/g);
  if(numbers === null){
    return NaN;
  }
  return Number(numbers.join(''));
}

export function padStart(str,minLength,strAdd){
  if(str.length >= minLength){
    return str;
  }
  const addLength = minLength - str.length;
  if(addLength < strAdd.length){
    strAdd = strAdd.slice(0,addLength);
  }

  return strAdd.repeat(Math.ceil(addLength / strAdd.length)).slice(0,addLength) + str;
}

export const getRandomNumber = (limit) => Math.floor(Math.random() * limit) + 1;

export const getRandomLikes = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// функция для генерации случайного id (реализована в виде замыкания)
export const generateId = (min, max) =>{
  const usedIds = {};

  return () => {
    let id;
    do {
      id = getRandomLikes(min, max);
    } while (usedIds[id]);
    usedIds[id] = true;
    return id;
  };
};

// функция для случайного url для фотографии
export const generateUrl = () => {
  const uniqValue = generateId(1, 25);
  const idPhotoUrl = uniqValue();
  return `photos/${idPhotoUrl}.jpg`;
};

// функция для случайного url для аватара
export const getAvatar = () => {
  const uniqValue = generateId(15, 200);
  return `img/avatar-${uniqValue()}.svg`;
};

