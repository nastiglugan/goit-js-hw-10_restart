const BASE_URL = 'https://api.thecatapi.com/v1';
const headers = {
  'x-api-key':
    'live_FOG7aRLYWG9g0M7LDbCu7dQ7ewu5mSLwwAFxQjU5uUVgVOeYBl8W7znUpztVyjx8',
};

function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds? {
  headers: {
    x-api-key: 'live_FOG7aRLYWG9g0M7LDbCu7dQ7ewu5mSLwwAFxQjU5uUVgVOeYBl8W7znUpztVyjx8',
  }`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

function fetchCatByBreed(breedId) {
  //api.thecatapi.com/v1/images/xnsqonbjW?api-key=live_FOG7aRLYWG9g0M7LDbCu7dQ7ewu5mSLwwAFxQjU5uUVgVOeYBl8W7znUpztVyjx8
  https: return fetch(`${BASE_URL}/images/${breedId}?{
  headers: {
    x-api-key: 'live_FOG7aRLYWG9g0M7LDbCu7dQ7ewu5mSLwwAFxQjU5uUVgVOeYBl8W7znUpztVyjx8',
  }`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
