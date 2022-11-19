function ArticleListView(ArticleItem) {
  this.blogListContainer = document.querySelector("#blog-list-container");
  this.model = null;
  View.call(this);
  this.init();
  //ArticleItem instance is saved in this class object
  this.ArticleItem = ArticleItem;
}

ArticleListView.prototype = Object.create(View.prototype);

ArticleListView.prototype.init = async function () {
  //creates the model to get the template and other data items
  this.model = await new ArticleListModel().init();
  //with the template html add it to <template> tag in dom
  const templateElement = this.createTemplateElement(
    "article-list-template",
    this.model.templateContent
  );
  //adds the template into dom
  this.createListElements(templateElement);
};

ArticleListView.prototype.createListElements = function (templateElement) {
  const { articleList } = this.model;
  const listElement = templateElement.content.cloneNode(true).firstElementChild;

  articleList.forEach((article) => {
    //for each article in the array
    //use instance of the articleItem to render the list item
    const articleItemElement = this.ArticleItem.render(article);
    //add to the dom list the generated dom list item element
    listElement.appendChild(articleItemElement);
  });

  //add to dom the list with all list items in the dom
  this.blogListContainer.appendChild(listElement);
};
