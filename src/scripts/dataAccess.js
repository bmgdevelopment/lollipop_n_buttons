const applicationState = {};
const API = 'http://localhost:8088';
const mainContainer = document.querySelector('#container');

export const fetchRequests = () => {
  return fetch(`${API}/reservations`)
    .then(response => response.json())
    .then(
      (serviceRequests) => {
        applicationState.requests = serviceRequests;
      }
    );
};

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
};

// export const fetchClowns = () => {
//     return fetch(`${API}/clowns`)
//       .then(response => response.json())
//       .then(
//         (allClowns) => {
//           clownArray = allClowns;
//         }
//       );
//   };
// export const getClowns = () => {
//     return clownArray.map(clown => ({...clown}))
// };

export const sendRequest = (userServiceRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
    }

    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const deleteRequest = (id) => {
    return fetch(`${API}/reservations/${id}`, { method: "DELETE"})
        .then(
            () => {
                console.log('A reservation has been deleted')
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}