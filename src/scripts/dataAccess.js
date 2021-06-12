const applicationState = {};
const API = 'http://localhost:8080'; //in API terminal window: json-server database.json -p 8088 -w
const mainContainer = document.querySelector('#container');


export const fetchRequests = () => {
  return fetch(`${API}/reservations`)
    .then(response => response.json()) //response.json() will take the response and convert it to a JavaScript object
    .then(
      (serviceRequests) => {
        applicationState.requests = serviceRequests;
      }
    );
};

export const getRequests = () => {
    return applicationState.requests.map(request => ({...request}))
};

let clownArray;

export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
      .then(response => response.json()) //response parameter is then used for the placement of the infomation via the API in reservations
      .then(
        (allClowns) => { //allClowns should hold the response.json() which holds the JavaScript array of clown objects
        clownArray = allClowns;
        }
      )
  };

  //fetch() method returns a promise, not the data I am after
  //.then() method must have a function within it & .then() is similar to an if statment but more of a when statement

export const getClowns = () => {
    return clownArray;
}

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