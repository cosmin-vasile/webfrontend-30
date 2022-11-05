//CRUD - create - read - update - delete
/*
Create	POST
Read	GET
Update	PUT
Delete	DELETE
*/

//fetch(URL, config).then().then().catch();

const baseURL = "https://www.postman.com/collections/df971fc1c71c76ba2aa1";

//Read - GET
fetch(baseURL)
  .then((response) => {
    console.log(response);
    const body = response.json();
    return body;
  })
  .then((response) => {
    //console.log(response);
  });

//Create - POST
fetch(baseURL + "/games", {
  method: "POST",
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  body: JSON.stringify({
    gameName: "LOL",
    gameRules: {
      fight: "auto",
    },
  }),
})
  .then((response) => {
    const body = response.json();
    return body;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//Update - PUT
const gameId = 1;
fetch(baseURL + "/games/" + gameId, {
  method: "PUT",
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  body: JSON.stringify({
    //gameId: 1,
    gameName: "Counter Strike",
  }),
})
  .then((response) => {
    const body = response.json();
    return body;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//Deleter - DELETE
fetch(baseURL + "/games/1", {
  method: "DELETE",
})
  .then((response) => {
    const body = response.json();
    return body;
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
