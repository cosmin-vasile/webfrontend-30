function App() {}

//when app is on init
//Create article item
//Create article list that uses an article item
//Create article modal to enable create/edit article
App.prototype.init = async function () {
  const ArticleItem = new ArticleItemView();
  const ArticleList = new ArticleListView(ArticleItem);
  const createArticleElement = document.querySelector("#create-new-article");

  const onSubmit = (title, description) => {
    const article = {
      title,
      description,
    };
    ArticleList.model.createArticle(article);
    //ArticleList.rerender();
    ArticleList.renderNewArticle(article);
  };
  const BaseModal = new Modal(onSubmit, "Create new article", "Create");
  await new ArticleModalView(BaseModal);
  createArticleElement.addEventListener("click", () => {
    BaseModal.show();
  });
};
