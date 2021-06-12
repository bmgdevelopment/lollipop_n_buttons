/* eslint-disable no-console */
import { sendRequest } from './dataAccess.js';
import { Clowns } from './Clowns.js';


const mainContainer = document.querySelector('#container');

let clownIdMatch;

document.addEventListener('change', e => {
  if (e.target.name === 'clown') {
    clownIdMatch = parseInt(e.target.value);
  }
});

mainContainer.addEventListener('click', clickEvent => {
  if (clickEvent.target.id === 'submitReservation') {
    const userParent = document.querySelector('input[name=\'parentName\']').value;
    const userChild = document.querySelector('input[name=\'childName\']').value;
    const userAddress = document.querySelector('input[name=\'address\']').value;
    const userTotalChildren = document.querySelector('input[name=\'totalChildren\']').value;
    const userPartyHours = document.querySelector('input[name=\'partyHours\']').value;
    const userPartyDate = document.querySelector('input[name=\'partyDate\']').value;
    // const userClownChoice = document.querySelector('input[name=\'clown\']').value;
    
    const datatoSendToAPI = {
      parentName: userParent,
      childName: userChild,
      totalChildren: userTotalChildren,
      address: userAddress,
      date: userPartyDate,
      partyHours: userPartyHours,
      clownId: clownIdMatch
    };

    if (userParent.length > 0 && userChild.length > 0 && userAddress.length > 0 && userPartyDate.length > 0 && userTotalChildren > 0 && userPartyHours > 0 && clownIdMatch > 0) {
      sendRequest(datatoSendToAPI);
    } else {
      console.log('User must submit all fields to submit reservation successfully.');
      alert('Oh no! We didn\'t receive your reservation! 🤡 Please complete all required fields to submit your reservation successfully! 🎈');
    }
  }
});

export const ServiceForm = () => {
  let html = `
    <div class="field">
    <label class="label" for="parentName">Parent's Full Name</label>
    <input type="text" name="parentName" class="input" />
</div>
<div class="field">
    <label class="label" for="childName">Birthday Child's First Name</label>
    <input type="text" name="childName" class="input" />
</div>
<div class="field">
    <label class="label" for="address">Birthday Party's Address</label>
    <input type="text" name="address" class="input" />
</div>
<div class="field">
    <label class="label" for="totalChildren">Total Children</label>
    <input type="number" name="totalChildren" class="input" />
</div>
<div class="field">
    <label class="label" for="partyHours">Needed Hours for Clown</label>
    <input type="number" name="partyHours" class="input" />
</div>
<div class="field">
    <label class="label" for="partyDate">Birthday Party's Date</label>
    <input type="date" name="partyDate" class="input" />
</div>
<div class="field">
    <label class="label" for=""><b>Which clown would you prefer?</b></label>
    <div class="clown__div">
    ${Clowns()}
    </div>
    </div>
    
    <button class="button" id="submitReservation">Submit Reservation</button>
    `;
  return html;
};
  

// <p><input type="radio" name="clown" id="clown lollipop"/> 🍭 Miss Lollipop</p>       
// <p><input type="radio" name="clown" id="clown buttons"/> 🤡 Mr. Buttons</p> 