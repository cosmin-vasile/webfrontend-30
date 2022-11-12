function createPromise() {
  const myPromise = new Promise((resolve, reject) => {
    if (true) {
      resolve("Ok");
    } else {
      reject("Error");
    }
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(myPromise);

  return myPromise;
}

async function createPromiseAsyncAwait() {
  let response1 = "";
  try {
    response1 = await new Promise((resolve, reject) => {
      if (true) {
        resolve("Ok1");
      } else {
        reject("Error1");
      }
    });
  } catch (error) {
    console.log(error);
  }

  if (response1) {
  }

  console.log("response1", response1);
  const response2 = await new Promise((resolve, reject) => {
    if (true) {
      resolve("Ok2");
    } else {
      reject("Error2");
    }
  });
  console.log("response2", response2);
  const response3 = await new Promise((resolve, reject) => {
    if (true) {
      resolve("Ok3");
    } else {
      reject("Error3");
    }
  });

  console.log("response3", response3);

  return `${response1}-${response2}-${response3}`;
}

const returned = createPromiseAsyncAwait().then((response) => {
  console.log(response);
});
console.log(returned);

const loadEpisodesAsyncAwait = async () => {
  let results = [];
  try {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    ({ results } = await response.json());
  } catch (error) {
    console.log(error);
  }

  console.log("1");
  console.log(results);
  console.log("2");
};

loadEpisodesAsyncAwait();

const loadTimeout = async () => {
  await setTimeout(() => {
    console.log("setTimeout finished");
  }, 10000);
  console.log("after settimeout");
};

loadTimeout();
