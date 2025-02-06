import { book } from '../Scripts/data.js';
const details = []
let renderBook = '';

const searchInput = document.getElementById('search-input');

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



searchInput.addEventListener('input', () => {
    if(searchInput.value.trim() === '') {
        book.forEach((books) => {
            renderBook = '';
            renderBook += `<a href="read.html" class="item-redirect"><div class="single-item" data-item-name="${books.bookTitle}" data-item-author="${books.bookAuthor}" data-item-content="${books.content}">
            <img class="book-cover" src="${books.image}">
            <div class="detail-container">
                <h3 class="book-title">${books.bookTitle}</h3>
                <p class="book-author">By &#183 ${books.bookAuthor}</p>
            </div>
            
        </div></a>`;
    
            document.querySelector('.book-cover-general').innerHTML = renderBook;
            console.log(renderBook)
        });
    } 

})
    

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


//search
const searchIcon = document.getElementById('search-icon')

searchIcon.addEventListener('click', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = book.filter(book => book.bookTitle.toLowerCase().includes(searchInput))
    
    if(searchResults.length){
        renderBook = ``;
        searchResults.forEach((result) => {
            renderBook += `<a href="read.html" class="item-redirect"><div class="single-item" data-item-name="${result.bookTitle}" data-item-author="${result.bookAuthor}" data-item-content="${result.content}">
    <img class="book-cover" src="${result.image}">
    <div class="detail-container">
        <h3 class="book-title">${result.bookTitle}</h3>
        <p class="book-author">By &#183 ${result.bookAuthor}</p>
    </div>
    
</div></a>`;
            
    document.querySelector('.book-cover-general').innerHTML = renderBook;

        })
    } 

    else {
        document.querySelector('.book-cover-general').innerHTML = `No Results Found`;
    }
})

searchInput.addEventListener('input', () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = book.filter(book => book.bookTitle.toLowerCase().includes(searchInput))
    
    if(searchResults.length){
        renderBook = ``;
        searchResults.forEach((result) => {
            renderBook += `<a href="read.html" class="item-redirect"><div class="single-item" data-item-name="${result.bookTitle}" data-item-author="${result.bookAuthor}" data-item-content="${result.content}">
    <img class="book-cover" src="${result.image}">
    <div class="detail-container">
        <h3 class="book-title">${result.bookTitle}</h3>
        <p class="book-author">By &#183 ${result.bookAuthor}</p>
    </div>
    
</div></a>`;
            
    document.querySelector('.book-cover-general').innerHTML = renderBook;

        })
    } 

    else {
        
    document.querySelector('.book-cover-general').innerHTML = `No Results Found`;
    }
})


searchInput.addEventListener('keydown', (event) => {

    if(event.key === 'Enter') {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
    const searchResults = book.filter(book => book.bookTitle.toLowerCase().includes(searchInput))
    
    if(searchResults.length){
        renderBook = ``;
        searchResults.forEach((result) => {
            renderBook += `<a href="read.html" class="item-redirect"><div class="single-item" data-item-name="${result.bookTitle}" data-item-author="${result.bookAuthor}" data-item-content="${result.content}">
    <img class="book-cover" src="${result.image}">
    <div class="detail-container">
        <h3 class="book-title">${result.bookTitle}</h3>
        <p class="book-author">By &#183 ${result.bookAuthor}</p>
    </div>
    
</div></a>`;
            
    document.querySelector('.book-cover-general').innerHTML = renderBook;

        })
    } 

    else {
        
    document.querySelector('.book-cover-general').innerHTML = `No Results Found`;
    }
    }
    
})