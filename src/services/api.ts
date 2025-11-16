// src/services/api.ts

const DOG_API = 'https://dog.ceo/api/breeds/image/random';
const CAT_API = 'https://api.thecatapi.com/v1/images/search';
const FOX_API = 'https://randomfox.ca/floof/';
const BUNNY_API = 'https://api.bunnies.io/v2/loop/random/?media=gif,png';
const DUCK_API = 'https://random-d.uk/api/random';
const BEAR_API = 'https://placebear.com/400/400';

export const fetchDogImage = async (): Promise<string> => {
  try {
    const response = await fetch(DOG_API);
    const data = await response.json();
    return data.message;
  } catch (error) {
    throw new Error('Error al cargar imagen de perro');
  }
};

export const fetchCatImage = async (): Promise<string> => {
  try {
    const response = await fetch(CAT_API);
    const data = await response.json();
    return data[0].url;
  } catch (error) {
    throw new Error('Error al cargar imagen de gato');
  }
};

export const fetchFoxImage = async (): Promise<string> => {
  try {
    const response = await fetch(FOX_API);
    const data = await response.json();
    return data.image;
  } catch (error) {
    throw new Error('Error al cargar imagen de zorro');
  }
};

export const fetchBunnyImage = async (): Promise<string> => {
  try {
    const response = await fetch(BUNNY_API);
    const data = await response.json();
    return data.media.gif || data.media.poster;
  } catch (error) {
    throw new Error('Error al cargar imagen de conejo');
  }
};

export const fetchDuckImage = async (): Promise<string> => {
  try {
    const response = await fetch(DUCK_API);
    const data = await response.json();
    return data.url;
  } catch (error) {
    throw new Error('Error al cargar imagen de pato');
  }
};

export const fetchBearImage = async (): Promise<string> => {
  try {
    const timestamp = new Date().getTime();
    return `https://placebear.com/400/400?t=${timestamp}`;
  } catch (error) {
    throw new Error('Error al cargar imagen de oso');
  }
};