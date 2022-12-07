const BookListItem = (book) => {
  let html = `<li id="${book.id}"
                class="book-list__item mb-6 mx-6 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
};
