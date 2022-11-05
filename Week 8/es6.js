// let x = 1;
// let y = 2;

// if (x === 1) {
//   let z = 2;
//   console.log(y);
// }

// console.log("z", z);

//let xx = 1;
//scopul parinte
function child() {
  let yy = 2;
  //scopul functiei child
  //poate redefiniti variabila xx - let xx = 11;
  function grandChild() {
    let zz = 3;
    //scopul functiei grandChild
    //poate redefini variabila yy, xx - let xx = 111; let yy = 22;
  }
}

//scope chaining
//functia child are access la scopul parinte
//functia grandChild are access la scopul parintilor din aproape in aproape
//pana la scopul parinte (ultimul scop)

function sum(a, b) {
  return a + b;
}

const sum2 = (a, b) => {
  return a + b;
};

const sum1 = (a, b) => a + b;

function carDriving(isDriving, wheels) {
  if (isDriving) {
    console.log(wheels + " wheels are spinning");
  }
}

// function createCar(color, wheels, doors, engine) {
//   var car = {
//     color: null,
//     wheels: null,
//     doors: null,
//     engine: null,
//   };

//   function setColor(color) {}

//   function createWheels(wheels) {}

//   function createDoors() {}

//   function createEngine(engine) {}

//   return car;
// }

// var dacia = createCar("white", 4, 5, "1.6 turbo");

let x = 1;
let y = 2;

if (x === 1) {
  let z = 2;
  console.log(y);
}

//console.log("z", z);

let xx = 1;
//scopul parinte
function child() {
  let yy = 2;
  //scopul functiei child
  //poate redefiniti variabila xx - let xx = 11;
  function grandChild() {
    let zz = 3;
    //scopul functiei grandChild
    //poate redefini variabila yy, xx - let xx = 111; let yy = 22;
  }
}

//scope chaining
//functia child are access la scopul parinte
//functia grandChild are access la scopul parintilor din aproape in aproape
//pana la scopul parinte (ultimul scop)

function sum(a, b) {
  return a + b;
}

// const sum = (a, b) => {
//   return a + b;
// };

// const sum1 = (a, b) => a + b;

function carDriving(isDriving, wheels) {
  if (isDriving) {
    console.log(wheels + " wheels are spinning");
  }
}
//const createCar = (color, wheels, doors, engine) => {
const createCar = (...carSettings) => {
  const car = {
    color: null,
    wheels: null,
    doors: null,
    engine: null,
  };
  console.log(carSettings);
  const [, , , itemIndex3] = carSettings; //carSettings is array
  console.log(itemIndex3);

  const setColor = () => {
    //car.color = color;
  };

  const createWheels = (wheels) => {};

  const createDoors = () => {};

  const createEngine = (engine) => {};

  const cloneCar = (carSettings) => {
    const clonedSettings = [...carSettings];
    clonedSettings.color = "red";
  };

  setColor();
  createWheels();
  createDoors();
  createEngine();
  cloneCarSettings();

  return car;
};

const dacia = createCar("white", 4, 5, "1.6 turbo");
console.log(dacia);

const rey = [1, 2, 3, 4, 5];
const [, index1] = rey;

const myCar = {
  color: "white",
  wheels: 4,
  doors: 5,
  engine: "1.6 TDI",
};

const { doors: toyotaDoors, engine } = myCar;

const anotherArray = [6, 7, 8];
const lastArray = [9, 10, 11, 6];

const mergedArrays = [...rey, ...lastArray, ...anotherArray];
console.log(mergedArrays);
const carToyota = {
  ...myCar,
  name: "Toyota",
  doors: 7,
};
