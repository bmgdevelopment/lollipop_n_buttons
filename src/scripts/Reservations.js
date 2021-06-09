import { getRequests, deleteRequest, getClowns } from './dataAccess.js';

export const Requests = () => {
  const requests = getRequests();
  const clowns = getClowns();

  let html= `
    <ul class="all__requests">
    ${requests.map(request => {

    const foundClown = clowns.find(
      (clown) => {
        return clown.id === request.clownId;
      });

    return `<li class="request">
        🎈 ${foundClown.name} will attend a birthday party for ${request.childName} on ${request.date}
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

mainContainer.addEventListener('click', click => {
  if (click.target.id.startsWith('request--')) {
    const [,requestId] = click.target.id.split('--');
    deleteRequest(parseInt(requestId));
  }
});