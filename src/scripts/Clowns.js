import { getClowns } from './dataAccess.js';


export const Clowns = () => {
  const clowns = getClowns();

  let html = '';
    
  const clownLine = clowns.map(clown => {
    return `<p>
        <input type="radio" name="clown" id="${clown.name}" value="${clown.id}"/>${clown.name}
        </p>`;
  });
  html += clownLine.join('');
  return html;
};