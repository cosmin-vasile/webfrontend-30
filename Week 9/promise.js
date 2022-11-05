//Sintaxa
const myNewPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve({});
  } else {
    reject(new Error("Mesaj"));
  }
});
myNewPromise.then().then().catch();

//Exemplul cu Callback
const processLoadedGames = (callback) => {
  const url = "https://rickandmortyapi.com/api/character";
  fetch(url)
    .then((response) => response.json())
    .then((response) => {
      callback(response);
    });
};

// processLoadedGames((processedGames) => {
//   console.log(processedGames);
// });

//Exemplul cu Promise
const getResource = (url) => {
  return fetch(url)
    .then((response) => {
      const { status } = response;

      if (status === 404) {
        //logheaza eroarea 400
        throw new Error("Eroare generica");
      } else if (status === 500) {
        //logheaza eroarea 500
      } else if (status === 200) {
        return response.json();
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const url = "https://rickandmortyapi.com/api/character";
const characterListPromise = getResource(url);
characterListPromise
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log("afiseaza eroarea pentru user", error);
  });

// const myPromise = new Promise((resolve, reject) => {
//   //downloadeaza resursa
//   const ok = true;
//   if (!ok) {
//     resolve("starea 0");
//   } else {
//     reject(new Error("Eroare in promise"));
//   }
// });

// myPromise
//   .then((response) => {
//     console.log("primul then", response);
//     return "1";
//   })
//   .then((response) => {
//     console.log("al doilea then", response);
//     return "2";
//   })
//   .then((response) => {
//     console.log("al treilea then", response);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   });
