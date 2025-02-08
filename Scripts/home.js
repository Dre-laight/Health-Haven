import { book } from '../Scripts/data.js';
let details = [];
const searchInput = document.getElementById('search-input');
const bookCoverGeneral = document.querySelector('.book-cover-general');

// Function to render the books
const renderBooks = (books) => {
    let renderBook = '';
    books.forEach((bookItem) => {
        renderBook += `
            <a  href="read.html" class="item-redirect">
                <div class="single-item" 
                    data-item-name="${bookItem.bookTitle}" 
                    data-item-author="${bookItem.bookAuthor}" 
                    data-item-content="${bookItem.content}">
                    <img class="book-cover" src="${bookItem.image}">
                    <div class="detail-container">
                        <h3 class="book-title">${bookItem.bookTitle}</h3>
                        <p class="book-author">By &#183 ${bookItem.bookAuthor}</p>
                    </div>
                </div>
            </a>
        `;
    });
    bookCoverGeneral.innerHTML = renderBook;
};

// Initial render of all books
renderBooks(book);

// Search functionality
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const searchResults = book.filter(b => b.bookTitle.toLowerCase().includes(query));

    if (searchResults.length > 0) {
        renderBooks(searchResults);
    } else {
        bookCoverGeneral.innerHTML = 'No Results Found';
    }
});

// Save book details to localStorage when a book is clicked
bookCoverGeneral.addEventListener('click', (event) => {
    if (event.target.closest('.single-item')) {
        const item = event.target.closest('.single-item');
        details.length = 0;
        console.log(details)
        const title = item.dataset.itemName;
        const author = item.dataset.itemAuthor;
        const content = item.dataset.itemContent;

        details.push({
            itemTitle: title,
            itemAuthor: author,
            itemContent: content
        });
        console.log(details)


        localStorage.setItem('details', JSON.stringify(details));
    }
});


// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
hamburgerMenu.addEventListener('click', () => {
    const menuLink = document.getElementById('navigation-mobile');
    menuLink.classList.toggle('show');
});

const genreBtn = document.querySelectorAll('.genre-btn')
genreBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const filteredResults = book.filter(b => b.category.toLowerCase().includes(button.dataset.category));

        if(filteredResults.length > 1) {
            renderBooks(filteredResults)
        } else {
            bookCoverGeneral.innerHTML = 'No Results Found';
        }

        

    })

})
