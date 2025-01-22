import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

const breedsList = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
breedsList.addEventListener('change', onChange);

// catInfo.classList.add('isHidden');
// loader.hidden = true;

catInfo.hidden = true;
loader.classList.add('isHidden');

fetchBreeds()
  .then(data => {
    Notiflix.Loading.standard('Loading data, please wait...');
    catInfo.hidden = false;
    creatSelect(data);
    new SlimSelect({
      select: breedsList,
    });

    Notiflix.Loading.remove();
  })
  .catch(err => {
    console.log(err);
    Notiflix.Loading.remove();
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });

function creatSelect(arr) {
  const markup = arr
    .map(({ reference_image_id, name }) => {
      return `<option value = ${reference_image_id}> ${name}</option>`;
    })
    .join('');

  //   breedsList.innerHTML = markup;
  breedsList.insertAdjacentHTML('beforeend', markup);

  //   new SlimSelect({
  //     select: breedsList,
  //   });
}

function onChange(evt) {
  const breedID = evt.target.value;

  Notiflix.Loading.standard('Loading data, please wait...');

  fetchCatByBreed(breedID)
    .then(catArr => {
      Notiflix.Loading.remove();
      creatMarkup(catArr);
    })

    .catch(err => {
      console.log(err);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
      Notiflix.Loading.remove();
    });
}

//

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

//function creatSelect(arr) {
//   //   const select = new SlimSelect({
//   //     select: '#selectElement',
//   //     data: countries,
//   //     });

//   const markup = arr
//     .map(({ reference_image_id, name }) => {
//       return `<option value = ${reference_image_id}> ${name}</option>`;
//     })
//     .join('');
//   breedsList.insertAdjacentHTML('beforeend', markup);
// }
