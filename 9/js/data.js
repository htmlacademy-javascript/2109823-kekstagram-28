import {getRandomLikes} from './functions.js';
import {getRandomElement} from './main.js';
export const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const names = ['Руслан','Роман','Иван','Виктор','Мария','Маргарита'];

export const descriptions = ['Это лучшая фотография','Отличное фото','Яркий цвет'];
//

//import { getRandomInteger, getRandomArrayElement, createRandomIdFromRangeGenerator } from './utils/util.js';

const SIMILAR_PHOTO_COUNT = 25;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const AVATAR_COUNT = 6;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 500;
const COMMENT_COUNT = 3;
const PHOTOS_DESCRIPTIONS = [
  'Здесь я лежу и кайфую на пляже',
  'Иду в магазин за пивком',
  'Красивый закат сегодня',
  'Сфоткал, "типа моя машина"',
  'Отдыхаем с друзьями :)',
  'Это я приготовил. Сколько звёзд дадите?',
  'Что-то скучно, кто-то гулять пойдёт?',
  'Всем сладких снов, я на боковую',
  'Эт я сфоткался у Эйфелевой башни',
  'А как у вас дела, друзья?'
];
export const COMMENTATORS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const COMMENTATORS_NAMES = ['Артём', 'Роман', 'Виталий', 'Анастасия', 'Владислав', 'Виктор', 'Кристина', 'Мария', 'Дмитрий', 'Кирилл'];

const generateCommentId = getRandomLikes(MIN_COMMENT_ID, MAX_COMMENT_ID);

const createMessage = () => Array.from({ length: getRandomLikes(1, 2) }, () => getRandomElement(COMMENTATORS_MESSAGES)).join(' ');

const createCommentByPhoto = () => ({
  id: generateCommentId,
  avatar: `img/avatar-${getRandomLikes(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomElement(COMMENTATORS_NAMES)
});

const createDescriptionPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomElement(PHOTOS_DESCRIPTIONS),
  likes: getRandomLikes(MIN_LIKE_COUNT, MAX_LIKE_COUNT),

  comments: Array.from({ length: getRandomLikes(0, COMMENT_COUNT) }, createCommentByPhoto)
});

const createSimilarDescriptionPhoto = () => Array.from({ length: SIMILAR_PHOTO_COUNT }, (_, index) => createDescriptionPhoto(index + 1));

export { createSimilarDescriptionPhoto };

