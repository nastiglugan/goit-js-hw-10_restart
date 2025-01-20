import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedsList = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
breedsList.addEventListener('change', onChange);

fetchBreeds()
  .then(data => creatSelect(data))
  .catch(err => console.log(err));

function onChange(evt) {
  const breedID = evt.target.value;

  fetchCatByBreed(breedID)
    .then(catArr => creatMarkup(catArr))
    .catch(err => console.log(err));
}

function creatSelect(arr) {
  const markup = arr
    .map(({ reference_image_id, name }) => {
      return `<option value = ${reference_image_id}> ${name}</option>`;
    })
    .join('');
  breedsList.insertAdjacentHTML('beforeend', markup);
}

function creatMarkup(catObj) {
  // catObj виявився обєктом, як не дивно, breeds виявився масивом.
  //Я робила map  on obj, а цей метод для масивів! того я дістала свій масив і його мепнула
  catInfo.innerHTML = '';
  const { url, breeds } = catObj;
  const catMarkup = breeds
    .map(({ name, description, temperament }) => {
      return ` <div><h2>${name}</h2>
          <p>${description}</p>
          <p>${temperament}</p>
          </div>

          <img src=${url} alt=${name} />`;
    })
    .join('');

  catInfo.insertAdjacentHTML('beforeend', catMarkup);
}
