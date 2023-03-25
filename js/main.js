import {getRandomNumber,getRandomLikes,generateId,generateUrl,getAvatar} from './functions.js';
import {names,descriptions,createSimilarDescriptionPhoto,COMMENTATORS_MESSAGES} from './data.js';
import {placePictures} from './render-pictures.js';
import {renderPhoto} from './thumbnail.js';


// создание случайных сообщений, внутри мы берем массив messages и обращаемся к элементу по случайному индексу с помощью функции generateId
export const getRandomElement = (elements) => elements[generateId(1, elements.length - 1)];

// создание массива, длинной getRandomLikes (то есть случайной длинной от 1 до 2)
const createMessage = (items) => Array.from({length: getRandomLikes(1,2)}, () => getRandomElement(items)).join(' ');

const uniqId = generateId(1, 25);

const createComment = () => {
  const uniqValue = generateId(1,1000);
  return {
    id: uniqValue(),
    avatar: getAvatar(),
    message: createMessage(COMMENTATORS_MESSAGES),
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

export const generateArray = (num) => {
  const posts = [];
  for(let i = 0; i < num; i++){
    posts.push(generateObject());

  }
  return posts;
};
//generateArray(25);
const photoArray = generateArray(25);

placePictures(photoArray);

renderPhoto(createSimilarDescriptionPhoto());

