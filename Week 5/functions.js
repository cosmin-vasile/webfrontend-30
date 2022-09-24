// function expression

//primitive - int, string, bool, null, undefined

var sayHello = function sayHello(name) {
  name = "Alessandro";
  if (name) {
    console.log("Function - Hello " + name);
  } else {
    console.log("Hey there");
  }
};

var myName = "Cosmin";
sayHello(myName);
console.log(myName);

var sayHello2 = function sayHello2(obj, a, b, c) {
  target = {};
  Object.assign(target, obj);
  target.name = "Alessandro";
  if (target) {
    console.log("Function - Hello " + obj.name);
  } else {
    console.log("Hey there");
  }
};

var myObj = {
  name: "Cosmin",
};
sayHello2(myObj, "a", "b", "c");
console.log(myObj);

function pageLoaded() {
  alert("THe page has been loaded.");
}
//window.onload = pageLoaded;

(function () {
  console.log("This is self invoked");
})();

function sum(a, b) {
  return a + b;
  // nothing will execute here
}

function sumWithException(a, b) {
  if (a > 0) {
    return a + b;
    // nothing will execute here
    console.log("---");
  } else if (b > a) {
    return b - a;
    // nothing will execute here
    console.log("---");
  }

  // nothing will execute here
  console.log("---");
}

//Alt statement
//
//
var a = sumWithException(1, 2);
console.log("a", a);
console.log("window.a", window.a);
var b = sumWithException(0, 3);
var c = sumWithException(0, 0);

function local() {
  var localVar = "my local var value";
  console.log(localVar);
}
local();
//Uncaught ReferenceError: localVar is not defined
//console.log(localVar);

var globalVar = "my global var";

function parentFunc() {
  console.log("parent", globalVar);
  var parentVar = "my parent var";

  function childFunc() {
    var childVar = "my child var";

    function grandChild() {
      console.log("grandChild", globalVar);
      console.log("grandChild", childVar);
      console.log("grandChild", parentVar);
    }
    grandChild();
  }
  childFunc();
}

parentFunc();

function showroom() {
  var wheels = 4;
  var color = "white";

  function createCar(type) {
    var price = 10000;

    console.log(
      "Masina mea " +
        type +
        " are " +
        wheels +
        " roti, culoarea " +
        color +
        " si costa " +
        price +
        " de euro"
    );
  }

  createCar("Dacia");
  createCar("Volvo");
}
showroom();
