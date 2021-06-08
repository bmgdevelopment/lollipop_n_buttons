import { ServiceForm } from './ServiceForm.js';
import { Requests } from './Reservations.js';

export const Buttons_n_Lollipop = () => {
  return `
    <h1>Buttons & Lollipop's Birthday Party Reservations</h1>
    <section class="serviceForm">
    ${ServiceForm()}
    </section>

    <section class="reservations">
    <h2 class="h2__font">Reservation Requests</h2>
    ${Requests()}
    </section>
    `;
};