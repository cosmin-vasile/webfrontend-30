function ArticleModalView() {
  this.model = null;
  View.call(this);

  return this.init();
}

ArticleModalView.prototype = Object.create(View.prototype);

ArticleModalView.prototype.init = async function () {
  this.model = await new ArticleModalModel().init();
  const templateElement = this.createTemplateElement(
    "article-modal-template",
    this.model.templateContent
  );

  return this;
};

ArticleModalView.prototype.show = function () {
  console.log("show");
  //if modal already in dom and has hidden - remove class hidden
  //if no modal exists in dom, use the template to add the modals elements to dom
  //and make it visible
};

ArticleModalView.prototype.hide = function () {
  console.log("hide");
  //remove modal class hidden
};
