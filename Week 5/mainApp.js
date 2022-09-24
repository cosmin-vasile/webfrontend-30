function createElement(tagName, html) {
  var newEl = document.createElement(tagName);
  newEl.innerHTML = html;

  return newEl;
}

function initMainApp() {
  console.log("Application was initialized.");
  console.log(document.getElementById("my-body"));
  console.log(document.getElementsByName("script-link"));
  console.log(document.getElementsByTagName("script"));
  console.log(document.querySelectorAll("#myid .myclass p"));
  var myP = document.querySelector("#myid .myclass p");
  if (myP) {
    myP.innerHTML = "P11111";
  }
  var secondP = document.querySelector("#myid .myclass p:nth-child(2) a");
  if (secondP) {
    secondP.setAttribute("title", "modified title");
  }

  var thirdP = document.querySelector("#myid .myclass p:nth-child(3)");
  console.log(thirdP.parentNode);
  //thirdP.parentNode.removeChild(thirdP);

  var newP1 = createElement("p", "newP1");
  var newP2 = createElement("p", "newP2");
  var newP3 = createElement("p", "newP3");
  var newP4 = createElement("p", "newP4");
  var parentEl = document.querySelector(".myclass");

  if (parentEl) {
    parentEl.appendChild(newP1);
    parentEl.appendChild(newP2);
  } else {
    console.log("Eroare, parent negasit");
  }

  parentEl.insertBefore(newP3, thirdP);
  parentEl.replaceChild(newP4, newP3);

  console.log(document.querySelectorAll("#myid .myclass p:nth-child(2)"));

  var onClick = function () {
    console.log("clicked");
  };
  document.querySelector("#btn").addEventListener("click", onClick);

  setTimeout(function () {
    console.log("removing event listener");
    document.querySelector("#btn").removeEventListener("click", onClick);
  }, 6000);
}
