function App() {}

//when app is on init
//Create article item
//Create article list that uses an article item
//Create article modal to enable create/edit article
App.prototype.init = async function () {
  const ArticleItem = new ArticleItemView();
  const ArticleList = new ArticleListView(ArticleItem);
  console.log(ArticleList);
  const createArticleElement = document.querySelector("#create-new-article");
  const Modal = await new ArticleModalView();
  createArticleElement.addEventListener("click", () => {
    Modal.show();
  });
};
