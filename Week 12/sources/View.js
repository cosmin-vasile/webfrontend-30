function View() {
  this.body = document.querySelector("body");
}
View.prototype.createTemplateElement = function (elementId, htmlContent) {
  const templateEl = document.createElement("template");
  templateEl.setAttribute("id", elementId);
  templateEl.innerHTML = htmlContent;

  this.body.appendChild(templateEl);

  return templateEl;
};
