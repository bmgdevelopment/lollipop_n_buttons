/* eslint-disable no-console */
import { Buttons_n_Lollipop } from './Buttons-n-Lollipop.js';
import { fetchClowns, fetchRequests } from './dataAccess.js';

const mainContainer = document.querySelector('#container');

const render = () => {
  fetchClowns().then( 
    () => {
      fetchRequests().then(
        () => {
          mainContainer.innerHTML = Buttons_n_Lollipop();
        }
      );
    });
};

render();

mainContainer.addEventListener('stateChanged', () => {
  console.log('State of data has changed. Regenerating HTML...');
  render();
});