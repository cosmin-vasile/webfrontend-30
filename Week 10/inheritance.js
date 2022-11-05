//blueprint
function Vehicle() {
  this.name = "";
  this.wheels = 0;
  this.fuel = ""; //gas, diesel, patrol, electric
  this.color = "";

  this.year = 2022;
  this.price = 1000;
  this.weight = "2000kg";

  this.isMoving = false;

  this.engine = null;
  this.clocks = null;
}

Vehicle.prototype.startEngine = function () {
  this.engine
    .start()
    .then((response) => {
      this.clocks.display(response, this.engine.rpm);
    })
    .catch((error) => {
      this.clocks.display(error);
    });
};
Vehicle.prototype.stopEngine = function () {
  this.engine.stop().then((response) => {
    this.clocks.display(response, this.engine.rpm);
  });
};
Vehicle.prototype.drive = function () {
  this.isMoving = true;
};

function Car(settings, engine, clocks) {
  Vehicle.call(this);
  const { name, wheels, fuel, color } = settings;
  this.name = name;
  this.wheels = wheels;
  this.fuel = fuel;
  this.color = color;
  this.engine = engine;
  this.clocks = clocks;
}

//Car.prototype = Object.assign(Car.prototype, Vehicle.prototype);
Car.prototype = Object.create(Vehicle.prototype);

function Motorcycle(settings, engine, clocks) {
  Vehicle.call(this);
  const { name, wheels, fuel, color } = settings;
  this.name = name;
  this.wheels = wheels;
  this.fuel = fuel;
  this.color = color;
  this.engine = engine;
  this.clocks = clocks;
}

function Engine() {
  this.isRunning = false;
  this.cmc = "";
  this.rpm = 0;
}

Engine.prototype.start = function () {
  return new Promise((resolve, reject) => {
    const engineTryingToStart = true;
    if (engineTryingToStart) {
      setTimeout(() => {
        this.isRunning = true;
        this.rpm = 800;
        resolve("Engine has started");
      }, 5000);
    } else {
      setTimeout(() => {
        reject("Engine has failed to start");
      }, 10000);
    }
  });
};

Engine.prototype.stop = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      this.isRunning = false;
      this.rpm = 0;
      resolve("Engine has stopped");
    }, 1000);
  });
};

function VehicleEngine() {
  this.cmc = "2000cm3";
}

VehicleEngine.prototype = Object.create(Engine.prototype);

function MotorcycleEngine() {
  this.cmc = "5000cm3";
}
MotorcycleEngine.prototype = Object.create(Engine.prototype);

function DashboardClocks() {
  //afisam numarul de rotatii
}

DashboardClocks.prototype.display = function (message, rpm) {
  console.log(message);
  if (rpm >= 0) {
    console.log(rpm);
  }
};

var toyota = new Car(
  {
    name: "Toyota",
    wheels: 4,
    fuel: "hibrid",
    color: "gri",
  },
  new VehicleEngine(),
  new DashboardClocks()
);
var suzuki = new Motorcycle(
  {
    name: "Suzuki",
    wheels: 2,
    fuel: "petrol",
    color: "red",
  },
  new MotorcycleEngine(),
  new DashboardClocks()
);

console.log(toyota);
console.log(suzuki);

setTimeout(() => {
  toyota.startEngine();
}, 0);

setTimeout(() => {
  toyota.stopEngine();
}, 5000);
