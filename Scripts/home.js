import { book } from '../Scripts/data.js';
const details = []
let renderBook = '';

book.forEach((books) => {
    renderBook += `<a href="read.html" class="item-redirect"><div class="single-item" data-item-name="${books.bookTitle}" data-item-author="${books.bookAuthor}" data-item-content="${books.content}">
    <img class="book-cover" src="${books.image}">
    <div class="detail-container">
        <h3 class="book-title">${books.bookTitle}</h3>
        <p class="book-author">By &#183 ${books.bookAuthor}</p>
    </div>
    
</div></a>`;

    document.querySelector('.book-cover-general').innerHTML = renderBook;
    
});

document.querySelectorAll('.single-item').forEach((item) => {
    item.addEventListener('click', () => {

        let title = item.dataset.itemName;
        let author = item.dataset.itemAuthor;
        let content = item.dataset.itemContent;

        details.push({
            itemTitle: title,
            itemAuthor: author,
            itemContent: content

        })

        localStorage.setItem('details', JSON.stringify(details))
        
    })
})

const hamburgerMenu = document.getElementById('hamburger-menu')

hamburgerMenu.addEventListener('click', () => {
    const menuLink = document.getElementById('navigation-mobile')
    menuLink.classList.toggle('show')
})


