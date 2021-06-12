/* eslint-disable no-console */
import { getRequests, deleteRequest, getClowns } from './dataAccess.js';

export const Requests = () => {
  const requests = getRequests();
  const clowns = getClowns();

  // ⏰ SORT DATES OF REQUESTS
  let sortedRequests = requests.sort((a,b) => {
    if (a.date > b.date) {
      return 1;
    } 
    if (a.date < b.date) {
      return -1;
    } 
    return 0;
  }); 

  let html= `
    <ul class="all__requests">
    ${sortedRequests.map(request => {

    const foundClown = clowns.find(
      (clown) => {
        return clown.id === request.clownId;
      });

    return `<li class="request">
        🎈 ${foundClown.name} will attend a birthday party for ${request.childName} on ${request.date}
        <button class='request__deny' id="deny--${request.id}">
        Deny</button> 
        <button class='request__delete' id="request--${request.id}">
        Delete 
        </button> 
        </li>`;
  }).join('')
}
</ul>
    `;
  return html;
};

const mainContainer = document.querySelector('#container');

//THE DELETE EVENT LISTENER ALSO DELETES WHEN DENY BUTTON IS CLICKED
mainContainer.addEventListener('click', click => {
  if (click.target.id.startsWith('request--') || click.target.id.startsWith('deny--')) {
    const [,requestId] = click.target.id.split('--');
    deleteRequest(parseInt(requestId));
  }
});