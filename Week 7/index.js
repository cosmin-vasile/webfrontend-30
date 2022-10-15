var myButtonEl = document.querySelector("#myButton");
myButtonEl.addEventListener("click", () => {
  console.log("I clicked this button");
});

var myComment = "my primitive comment"; // primitive
var mySettings = {
  input: "my input",
  button: "my button",
}; // non - primitive

function addComment(comment, settings) {
  comment = "my modified comment";

  settings.input = "my modified input";

  console.log("func 1:", comment);
  console.log("func 2:", settings);
}

addComment(myComment, mySettings);

console.log("1", myComment);
console.log("2", mySettings);

var x = 1;

setTimeout(function () {
  console.log("x2:", x);
}, 1000);

setTimeout(function () {
  x = 100;
}, 999);

console.log("x1:", x);

var y = 1;
myButtonEl.addEventListener("click", function () {
  y = 100;
  console.log("second event on button applied", y);
});
console.log("y2:", y);

var timeoutId = setTimeout(function () {
  console.log("calls setTimeout");
  return 100;
}, 5000);
clearTimeout(timeoutId);
console.log("z:", timeoutId);
