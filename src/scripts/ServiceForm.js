import { sendRequest } from './dataAccess.js';

// const clowns = getClowns();
const mainContainer = document.querySelector('#container');

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
      // clownId: userClownChoice
    };

    sendRequest(datatoSendToAPI);
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
    <p><input type="radio" name="clown" id="clown lollipop"/>🍭Miss Lollipop</p>       
    <p><input type="radio" name="clown" id="clown buttons"/>🤡Mr. Buttons</p>       
    </div>
    </div>
    
    <button class="button" id="submitReservation">Submit Reservation</button>
    `;
  return html;
};
  
//   ${clowns.map(clown => {
//   return `
//   <input type="radio" name="clown" id="${clown.name}" value="${clown.id}"/>${clown.name}        
//       `;
// }).join('')
// }