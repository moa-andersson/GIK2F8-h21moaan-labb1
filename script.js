'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const bookListElement = document.querySelector('.book-list');
  const root = document.getElementById('root');

  bookListElement && root.removeChild(bookListElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


  const imgItems = document.querySelectorAll(".book-list__item"); 

  for(let i = 0; i < imgItems.length; i++){ 

    imgItems[i].addEventListener("mousemove", (e) => {
      let book = getBookById(e.target.id)
      book.then(function (result){
        showImgResult(result);

        let div = document.getElementById('bookDetail');
        let left = e.pageX + 20;
        let top = e.pageY + 20;
        div.style.left = left + 'px'; 
        div.style.top = top + 'px';

      })

    });

    imgItems[i].addEventListener("mouseleave", () => {
      const bookDetailElement = document.getElementById("bookDetail");

      bookDetailElement && bookDetailElement.remove();
    });
  }
}

function showImgResult(book){
  const bookDetailElement = document.getElementById("bookDetail");
  const root = document.getElementById("root");

  let html = BookImage(book);
  root.insertAdjacentHTML("afterend", html);

  bookDetailElement && bookDetailElement.remove(); 
}