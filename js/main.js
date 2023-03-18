import {isValidateString,isPalindrom,extractNumber,padStart,getRandomNumber,getRandomLikes,generateId,generateUrl,getAvatar} from './functions.js';
import {messages,names,descriptions} from './data.js';


// создание случайных сообщений, внутри мы берем массив messages и обращаемся к элементу по случайному индексу с помощью функции generateId
const getRandomMessages = () => messages[generateId(1, messages.length - 1)];

// создание массива, длинной getRandomLikes (то есть случайной длинной от 1 до 2)
const createMessage = () => Array.from({length: getRandomLikes(1,2)}, getRandomMessages).join(' ');

const uniqId = generateId(1, 25);

const createComment = () => {
  const uniqValue = generateId(1,1000);
  return {
    id: uniqValue(),
    avatar: getAvatar(),
    message: createMessage(),
    name: names[getRandomLikes(1, names.length - 1)]
  };
};

const generateObject = () =>({
  id: uniqId(),
  url: generateUrl(),
  description: descriptions[getRandomNumber(descriptions.length) - 1],
  likes: getRandomLikes(15,200),
  comments: Array.from({length: 2}, createComment),
});

const generateArray = (num) => {
  const posts = [];
  for(let i = 0; i < num; i++){
    posts.push(generateObject());

  }
  return posts;
};
console.log(generateArray(25));

