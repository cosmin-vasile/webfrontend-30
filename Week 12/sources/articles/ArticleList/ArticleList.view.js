class ArticleListView extends View {
  constructor(ArticleItem) {
    super();
    this.blogListContainer = document.querySelector("#blog-list-container");
    this.model = null;
    this.init();
    //ArticleItem instance is saved in this class object
    this.ArticleItem = ArticleItem;
  }

  init = async function () {
    //creates the model to get the template and other data items
    this.model = await new ArticleListModel().init();
    //with the template html add it to <template> tag in dom
    const templateElement = this.createTemplateElement(
      "article-list-template",
      this.model.templateContent
    );
    this.listElement =
      templateElement.content.cloneNode(true).firstElementChild;
    //adds the template into dom
    this._createListElements();
  };

  rerender() {
    //recreate list of elements
    this.blogListContainer.innerHTML = "";
    this._createListElements();
  }

  renderNewArticle(article) {
    //render only the new article elements
    const articleItemElement = this.ArticleItem.render(article);
    this.listElement.insertBefore(
      articleItemElement,
      this.listElement.firstChild
    );
  }

  _createListElements = function () {
    const { articleList } = this.model;

    articleList.forEach((article) => {
      //for each article in the array
      //use instance of the articleItem to render the list item
      const articleItemElement = this.ArticleItem.render(article);
      //add to the dom list the generated dom list item element
      this.listElement.appendChild(articleItemElement);
    });

    //add to dom the list with all list items in the dom
    this.blogListContainer.appendChild(this.listElement);
  };
}
