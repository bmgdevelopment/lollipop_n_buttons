/* eslint-disable no-console */
import { Buttons_n_Lollipop } from './Buttons-n-Lollipop.js';
import { fetchRequests } from './dataAccess.js';

const mainContainer = document.querySelector('#container');

const render = () => {
  fetchRequests().then(
    // fetchClowns().then(
    () => {
      mainContainer.innerHTML = Buttons_n_Lollipop();
    }
  );
};

render();

mainContainer.addEventListener('stateChanged', () => {
  console.log('State of data has changed. Regenerating HTML...');
  render();
});