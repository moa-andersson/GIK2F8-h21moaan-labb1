const BookImage = (book) => {
    let html = `
    <div id="bookDetail" class="book__detail absolute rounded bg-slate-100/50 p-6 w-1/6 top-10 right-10 font-serif">
        <img src="${book.coverImage}" alt="Boken saknar omslag">
    </div>
    `;

    return html;
};